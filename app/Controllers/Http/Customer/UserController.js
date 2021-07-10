'use strict'

const Logger = use("Logger");
const { validate } = use("Validator");
const User = use("App/Models/User");
const GeralUserController = use('App/Controllers/Http/UserController')

class UserController extends GeralUserController {
}

module.exports = UserController;
