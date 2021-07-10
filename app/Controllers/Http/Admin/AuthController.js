'use strict';

const Database = use('Database');
const Role = use('Role');
const User = use('App/Models/User');
const Image = use('App/Models/Image');
const Employee = use('App/Models/Employee');
const { validate } = use('Validator');
const Hash = use('Hash');
const axios = use('axios');
const Env = use('Env');
const Logger = use('Logger');
const GeralAuthController = use('App/Controllers/Http/AuthController');
const { manage_single_upload } = use('App/Helpers');

class AuthController extends GeralAuthController {
  async register({ request, response }) {
    const trx = await Database.beginTransaction();
    const data = request.post();
    const rules = {
      fullname: `required`,
      responsibility: `required`,
      phone: `required|unique:${User.table}`,
      email: `required|unique:${User.table}`,
      document: `required|unique:${User.table}`,
    };

    const messages = {
      'fullname.required': 'O nome é obrigatório!',
      //'username.unique': 'Esse nome de usuário já está em uso, tente outro.',
      'email.required': 'O email é obrigatório!',
      'email.unique': 'Email já cadastrado.',
      'phone.required': 'O telefone é obrigatório!',
      'phone.unique': 'Telefone já cadastrado.',
      'document.required': 'O CPF é obrigatório!',
      'document.unique': 'CPF já cadastrado.',
      'responsibility.required': 'A função é obrigatória!',
    };

    const validation = await validate(data, rules, messages);

    if (validation.fails()) {
      const validation_messages = validation.messages().map(msgObject => {
        return msgObject.message;
      });

      return response.status(400).send({
        success: false,
        message: validation_messages,
      });
    }

    try {
      const {
        email,
        fullname,
        document,
        phone,
        responsibility,
      } = request.all();

      const fileJar = request.file('image', {
        types: ['image'],
        size: '2mb',
      });
      var image;
      if (fileJar) {
        const file = await manage_single_upload(fileJar);
        if (file.moved()) {
          image = await Image.create({
            path: file.fileName,
            size: file.size,
            original_name: file.clientName,
            extension: file.subtype,
          });
        }
      }

      const user = await User.create(
        {
          email,
          fullname,
          document,
          phone,
          image_id: image ? image.id : null,
        },
        trx
      );
      const role = await Role.findBy('slug', 'employee');
      await user.roles().attach([role.id], null, trx);
      const employee = await Employee.create(
        {
          user_id: user.id,
          responsibility,
        },
        trx
      );

      let return_body = {
        success: true,
        user,
        message: 'Usuário registrado com sucesso!',
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
  } //create

  async login({ request, response, auth }) {
    const { phone, verification_code } = request.all();
    const user = await User.findBy('phone', phone);
    const roles = await user.getRoles();
    if (user && !roles.includes('employee')) {
      return response.status(403).send({
        success: false,
        message: 'Usuário não tem permissão para acessar como administrador.',
      });
    }
    if (
      user &&
      (await Hash.verify(verification_code, user.verification_code))
    ) {
      return response.json(await auth.withRefreshToken().generate(user));
    } else {
      return response.status(403).send({ message: 'Incorrect code!' });
    }
  }
}

module.exports = AuthController;
