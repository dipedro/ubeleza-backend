'use strict';

const Logger = use('Logger');
const { validate } = use('Validator');
const User = use('App/Models/User');
const GeralUserController = use('App/Controllers/Http/UserController');

class UserController extends GeralUserController {
  async index({ request, response, view }) {}

  async store({ request, response }) {}

  async show({ params, request, response, view }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = UserController;
