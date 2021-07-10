'use strict';

const { Database } = require('sqlite3');

const Logger = use('Logger');
const BankAccount = use('App/Models/BankAccount');

class BankAccountController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      const bankAccounts = await user.bankAccounts().with('bank.image').fetch();
      response.send(bankAccounts);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async store({ request, response, auth }) {
    try {
      const user = await auth.user;
      const {
        bank_id,
        agency_number,
        agency_digit,
        acc_number,
        acc_digit,
        acc_type,
        fullname,
        document,
      } = request.all();
      await user.bankAccounts().create({
        bank_id,
        agency_digit,
        agency_number,
        acc_digit,
        acc_number,
        acc_type,
        fullname,
        document,
      });
      return response.status(200).send({
        success: true,
        message: 'Conta bancária adicionada com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao adicionar conta bancária! ' + error,
      });
    }
  }

  async show({ params, response }) {
    try {
      const bankAccount = await BankAccount.query()
        .with('bank.image')
        .where('id', params.id)
        .firstOrFail();
      return response.send({ bankAccount });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async update({ params, request, response }) {
    try {
      const user = await auth.user;
      const {
        bank_id,
        agency_number,
        agency_digit,
        acc_number,
        acc_digit,
        acc_type,
        fullname,
        document,
      } = request.all();
      await Database.table('bank_accounts').where('id', params.id).update({
        bank_id,
        agency_number,
        agency_digit,
        acc_number,
        acc_digit,
        acc_type,
        fullname,
        document,
      });

      return response.status(200).send({
        success: true,
        message: 'Conta bancária atualizado com sucesso!',
      });
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async destroy({ params, request, response }) {
    try {
      const bankAccount = await BankAccount.query()
        .where('id', params.id)
        .firstOrFail();
      await bankAccount.delete();
      return response.status(200).send({
        success: true,
        message: 'Conta bancária removida com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao remover conta bancária! ' + error,
      });
    }
  }
}

module.exports = BankAccountController;
