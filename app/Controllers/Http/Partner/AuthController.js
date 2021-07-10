'use strict';
const fs = use('fs');
const Database = use('Database');
const Role = use('Role');
const User = use('App/Models/User');
const Image = use('App/Models/Image');
const Partner = use('App/Models/Partner');
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
      exp_time: `required`,
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
      'exp_time.required': 'O tempo de experiência é obrigatório!',
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
        exp_time,
        how_meet,
        other_app,
        legal_document,
        legal_name,
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
      const role = await Role.findBy('slug', 'partner');
      await user.roles().attach([role.id], null, trx);
      const partner = await Partner.create(
        {
          user_id: user.id,
          exp_time,
          how_meet,
          other_app,
          legal_name,
          legal_document,
          status: 'waiting',
        },
        trx
      );

      let return_body = {
        success: true,
        user,
        message: 'Usuário registrado com sucesso!',
      };
      await trx.commit();
      // if (user) {
      //   let verification_code = Math.floor(1000 + Math.random() * 9000);
      //   (async function () {
      //     const sms = await axios({
      //       url: 'https://api2.totalvoice.com.br/sms',
      //       method: 'post',
      //       headers: {
      //         'Access-Token': Env.get('TOTAL_VOICE_TOKEN'),
      //       },
      //       data: {
      //         numero_destino: phone,
      //         mensagem:
      //           'Bem vindo ao Ubeleza, para confirmar sua conta, insira o seguinte código no aplicativo: ' +
      //           verification_code,
      //       },
      //     });
      //     console.log(sms.data);
      //   })();
      //   verification_code = await Hash.make(verification_code.toString());
      //   user.merge({
      //     verification_code,
      //   });
      //   user.save();
      // }
      response.status(201).send(return_body);
    } catch (error) {
      await trx.rollback();
      Logger.error('Error : ', error);
      return response.status(500).send({
        message: error.toString(),
      });
    }
  } //create

  getInitials = function (string) {
    var names = string.split(' '),
      initials = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  async login({ request, response, auth }) {
    const { phone, verification_code } = request.all();
    const user = await User.findBy('phone', phone);
    if (user.status == 'banished') {
      const ban = await user
        .banishments()
        .orderBy('created_at', 'DESC')
        .limit(1)
        .fetch();
      return response.status(403).send({
        success: false,
        ban,
      });
    }
    const roles = await user.getRoles();
    if (user && !roles.includes('partner')) {
      return response.status(403).send({
        success: false,
        message: 'Usuário não tem permissão para acessar como parceiro.',
      });
    }
    if (
      user
      //&&
      //(await Hash.verify(verification_code, user.verification_code))
    ) {
      var partner = await user.partner().with('addresses').fetch();
      if(partner.$attributes.status === 'approved') {

        var addresses = await partner.addresses().fetch();
        addresses = addresses.toJSON();
        var newPartner = addresses.length > 0 ? false : true;
        return response.send({
          newPartner,
          user: await auth.withRefreshToken().generate(user),
        });
      }
      else if (partner.$attributes.status === 'waiting') {
        return response.status(403).send({
          success: false,
          message: 'Usuário ainda não aprovado para ser um parceiro.',
        });
      }
      else {
        return response.status(403).send({
          success: false,
          message: 'Usuário não tem permissão para acessar como parceiro.',
        });
      }
    }
  }
}

module.exports = AuthController;
