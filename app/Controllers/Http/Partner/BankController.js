'use strict'
const Logger = use('Logger');
const Bank = use('App/Models/Bank');

class BankController {
  async index({ request, response }) {
    try {
      const banks = await Bank.query().with('image').fetch();
      return response.send(banks);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }
}

module.exports = BankController
