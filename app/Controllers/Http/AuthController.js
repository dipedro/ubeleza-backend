'use strict';

const User = use('App/Models/User');
const Partner = use('App/Models/Partner');
const Employee = use('App/Models/Employee');
const Customer = use('App/Models/Customer');
const { validate } = use('Validator');
const Logger = use('Logger');
const Mail = use('Mail');
const moment = require('moment');
const crypto = require('crypto');
const Hash = use('Hash');
const axios = use('axios');
const Env = use('Env');

class AuthController {
  async refresh({ request, response, auth }) {
    const refresh_token = request.input('refresh_token');

    if (!refresh_token) {
      refresh_token = request.header('refresh_token');
    }

    const user = await auth
      .newRefreshToken()
      .generateForRefreshToken(refresh_token);

    return response.send({ data: user });
  }

  async updateVerificationCode({ request, response }) {
    const { phone, role } = request.all();
    const user = await User.findBy('phone', phone);

    if (user) {
      const partner = await Partner.findBy('user_id', user.id);
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
      } else {
        if (role == 'partner' && partner) {
          if (partner.status == 'waiting') {
            return response.status(401).send({
              message: 'Parceiro aguardando aprovação!',
            });
          } else if (partner.status == 'reproved') {
            return response.status(401).send({
              message: 'Parceiro reprovado!',
            });
          }
        } else {
          response.status(404).send({
            message: 'Telefone não encontrado, verifique e tente novamemte!',
          });
        }
        let verification_code = Math.floor(1000 + Math.random() * 9000);
        (async function () {
          const sms = await axios({
            url: 'https://api2.totalvoice.com.br/sms',
            method: 'post',
            headers: {
              'Access-Token': Env.get('TOTAL_VOICE_TOKEN'),
            },
            data: {
              numero_destino: phone,
              mensagem:
                'Insira o seguinte código no Ubeleza: ' + verification_code,
            },
          });
        })();
        const verification_code_hash = await Hash.make(
          verification_code.toString()
        );
        user.merge({
          verification_code: verification_code_hash,
        });
        user.save();

        response
          .status(200)
          .send({ message: 'Código enviado com sucesso!' + verification_code });
      }
    } else {
      response.status(404).send({
        message: 'Telefone não encontrado, verifique e tente novamemte!',
      });
    }
  }

  async verifyPartnerStatus({ params, response }) {
    try {
      const partner = await Partner.findByOrFail('user_id', params.id);
      const statusP = partner.status;
      //console.log(status, status.toUpperCase());
      response.send({ status: statusP.toUpperCase() });
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async verifyIfContactExists({ request, response }) {
    const data = request.post();
    const rules = {
      legal_name: `unique:${Partner.table}`,
      phone: `unique:${User.table}`,
      email: `unique:${User.table}`,
      document: `unique:${User.table}|min:11|max:11`,
      legal_document: `unique:${Partner.table}|min:14|max:14`,
    };

    const messages = {
      'email.unique': 'Email já cadastrado.',
      'phone.unique': 'Telefone já cadastrado.',
      'document.unique': 'CPF já cadastrado.',
      'document.min': 'O CPF deve conter 11 dígitos.',
      'document.max': 'O CPF deve conter 11 dígitos.',
      'legal_name.unique': 'Razão Social já cadastrada.',
      'legal_document.unique': 'CNPJ já cadastrado.',
      'legal_document.min': 'O CNPJ deve conter 14 dígitos.',
      'legal_document.max': 'O CNPJ deve conter 14 dígitos.',
    };

    const validation = await validate(data, rules, messages);
    if (validation.fails()) {
      const validation_messages = validation.messages().map(msgObject => {
        var field = msgObject.field;
        return response.status(400).send({
          [field]: {
            hasStatus: true,
            message: msgObject.message,
            type: 'error',
          },
        });
      });
    } else {
      return response.send({
        hasStatus: false,
        message: null,
        type: 'success',
      });
    }
  }

  // async forgotPassword({ request, response }) {
  //   try {
  //     const { email } = request.only(['email']);
  //     const user = await User.findByOrFail('email', email);
  //     const token = await crypto.randomBytes(10).toString('hex');
  //     user.token_created_at = new Date();
  //     user.token = token;
  //     await user.save();

  //     await Mail.send('emails.recover', { user, token }, message => {
  //       message.from('suporte@ubeleza.com.br').to(email);
  //     });
  //     return user;
  //   } catch (error) {
  //     return error;
  //   }
  // }

  // async updatePassword({ request, response, params }) {
  //   const tokenProvided = params.token;
  //   const emailRequesting = params.email;

  //   const { newPassword } = request.only(['newPassword']);
  //   const { newPasswordConfirmation } = request.only([
  //     'newPasswordConfirmation',
  //   ]);

  //   const user = await User.findByOrFail('email', emailRequesting);

  //   const sameToken = tokenProvided === user.token;

  //   if (
  //     !newPassword ||
  //     !newPasswordConfirmation ||
  //     newPassword != newPasswordConfirmation
  //   ) {
  //     return response.status(401).send({
  //       message: {
  //         error:
  //           'Please, check if the password and the confirmation are equals',
  //       },
  //     });
  //   }

  //   if (!sameToken) {
  //     return response.status(401).send({
  //       message: {
  //         error: 'Old token provided or token already used',
  //       },
  //     });
  //   }

  //   const tokenExpired = moment()
  //     .subtract(2, 'days')
  //     .isAfter(user.token_created_at);

  //   if (tokenExpired) {
  //     return response.status(401).send({ message: { error: 'Token expired' } });
  //   }

  //   user.password = newPassword;

  //   user.token = null;
  //   user.token_created_at = 0;

  //   await user.save();
  //   return response.status(200).send('Senha atualizada com sucesso!');
  // }

  async logout({ request, response, auth }) {
    let refresh_token = request.input('refresh_token');

    if (!refresh_token) {
      refresh_token = request.header('refresh_token');
    }

    const loggedOut = await auth
      .authenticator('jwt')
      .revokeTokens([refresh_token], true);

    return response.status(204).send({});
  }

  async redirectFacebook({ ally }) {
    await ally.driver('facebook').redirect();
  }

  async callbackFacebook({ ally, auth }) {
    try {
      const fbUser = await ally.driver('facebook').getUser();

      // user details to be saved
      const userDetails = {
        email: fbUser.getEmail(),
        token: fbUser.getAccessToken(),
        login_source: 'facebook',
      };

      // search for existing user
      const whereClause = {
        email: fbUser.getEmail(),
      };

      const user = await User.findByOrFail(whereClause);
      if (user) {
        await auth.login(user);
      }

      return 'Logged in';
    } catch (error) {
      return 'Unable to authenticate. Try again later';
    }
  }
}

module.exports = AuthController;
