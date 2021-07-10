'use strict';

const Database = use('Database');
const Logger = use('Logger');
const Partner = use('App/Models/Partner');
const Customer = use('App/Models/Customer');
class CustomerController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      const customers = await partner.customers().with('user.image').orderBy('favorited', 'desc').fetch();
      response.send(customers);
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
      const partner = await user.partner().fetch();
      const { customer_id } = request.all();
      await partner.customers().attach([customer_id]);
      return response.status(200).send({
        success: true,
        message: 'Cliente adicionado com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao adicionar cliente! ' + error,
      });
    }
  }

  async update({ params, request, response, auth }) {
    try {
      const customer = await Customer.query()
        .where('id', params.id)
        .with('user')
        .firstOrFail();
      const user = await auth.user;
      const partner = await user.partner().fetch();
      const { favorited } = request.all();
      await Database
        .table('partner_customers')
        .where('customer_id', customer.id)
        .where('partner_id', partner.id)
        .update({favorited});
      return response.status(200).send({
        success: true,
        message: 'Cliente alterado com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async show({ params, response, auth }) {
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      const customer = await partner.customers()
        .where('customer_id', params.id)
        .with('user')
        .firstOrFail();
      return response.send({ customer });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async destroy({ params, auth, response }) {
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      const customer = await Customer.query()
        .where('id', params.id)
        .with('user')
        .firstOrFail();
      await partner.customers().detach([customer.id]);
      return response.status(200).send({
        success: true,
        message: 'Cliente removido com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao remover cliente! ' + error,
      });
    }
  }
}

module.exports = CustomerController;
