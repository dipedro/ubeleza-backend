'use strict'
const Logger = use('Logger');

const ServiceType = use('App/Models/ServiceType');
const Service = use('App/Models/Service');
const Database = use('Database');

class HistoryController {

  async index ({ request, response, auth }) {
    const user = await auth.user;
    const partner = await user.partner().fetch();
    const services = await partner.serviceRequests()
      .with('service.type')
      .with('ratings', (builder) => {
        builder.where('type', 'to_partner')
      })
      .with('customer.user.image')
      .where('status', 'finished')
      .orderBy('id', 'desc')
      .limit(10)
      .fetch();
    const mostAttended = await partner.customers().with('user.image').with('serviceRequests', (builder) => {
      builder.where('partner_id', partner.id).with('service').where('status', 'finished').orderBy('date', 'desc').limit(1)
    }).orderBy('count', 'desc').limit(10).fetch();
    return response.send({
      lastService: services.first(),
      mostAttended,
      history: services
    })
  }

  async store ({ request, response }) {
  }

  async show ({ params, request, response, auth }) {
  }

  async update ({ params, request, response }) {
  }

  async destroy ({ params, request, response }) {
  }
}

module.exports = HistoryController
