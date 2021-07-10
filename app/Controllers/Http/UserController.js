'use strict';

const Logger = use('Logger');
const { validate } = use('Validator');
const User = use('App/Models/User');
class UserController {
  async index({ request, response }) {
    const data = request.all();
    try {
      const users = await User.getUsers(data);
      response.send(users);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async show({ request, params, response }) {
    try {
      const user = await User.query()
        .where('id', params.id)
        .with('image')
        .fetch();
      response.send(user);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async update({ params, request, response }) {
    const { username, password, email, phone } = request.only([
      'full',
      'password',
      'email',
      'phone',
    ]);
    const data = request.only(['username', 'password', 'email', 'phone']);
    const rules = {
      username: `unique:${User.table}`,
      email: `unique:${User.table}`,
    };

    const messages = {
      // "username.required": "O nome de usuário é obrigatório!",
      'username.unique': 'Esse nome de usuário já está em uso, tente outro.',
      'email.unique': 'Email já cadastrado.',
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
    const user = await User.findOrFail(params.id);
    user.merge({ username, password, email, phone });
    await user.save();
    await user.loadMany(['roles', 'permissions']);

    return user;
  }

  async destroy({ params, response }) {
    try {
      User.deleteUser(params.id);
      response.status(204).send('Conta deletada com sucesso!');
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }
}

module.exports = UserController;
