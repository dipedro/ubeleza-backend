'use strict';

const Employee = use('App/Models/Employee');
const User = use('App/Models/User');
const Image = use('App/Models/Image');
const { validate } = use('Validator');
const Database = use('Database');
const Logger = use('Logger');
const Hash = use('Hash');
const { manage_single_upload } = use('App/Helpers');

class EmployeeController {
  async index({ request, response }) {}

  async store({ request, response }) {}

  async show({ params, request, response }) {
    try {
      const employee = await Employee.query()
        .where('id', params.id)
        .with('user')
        .firstOrFail();
      return employee;
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async me({ auth, request, response }) {
    const user = await auth.user;
    try {
      const employee = await user.employee().with('user').firstOrFail();
      return employee;
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async update({ params, request, response }) {
    const trx = await Database.beginTransaction();
    try {
      const employee = await Employee.findOrFail(params.id);
      const user = await employee.user().fetch();
      const {
        email,
        fullname,
        document,
        phone,
        responsibility,
        password,
      } = request.all();

      const fileJar = request.file('image', {
        types: ['image'],
        size: '2mb',
      });
      var image;
      if (fileJar) {
        const file = await manage_single_upload(fileJar);
        if (file.moved()) {
          image = await Image.create(
            {
              path: file.fileName,
              size: file.size,
              original_name: file.clientName,
              extension: file.subtype,
            },
            trx
          );
        }
      }

      await user.merge(
        {
          email,
          fullname,
          document,
          phone,
          image_id: image ? image.id : null,
          password: await Hash.make(password),
        },
        trx
      );
      await employee.merge(
        {
          user_id: user.id,
          responsibility,
        },
        trx
      );
      await user.save(trx);
      await employee.save(trx);
      let return_body = {
        success: true,
        user,
        message: 'Registrado alterado com sucesso!',
      };
      await trx.commit();
      response.status(201).send(return_body);
    } catch (error) {
      await trx.rollback();
      Logger.error('Error : ', error);
      return response.status(500).send({
        message: error.toString(),
      });
    }
  }

  async destroy({ params, request, response }) {}
}

module.exports = EmployeeController;
