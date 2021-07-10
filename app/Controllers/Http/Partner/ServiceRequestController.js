'use strict';
const Logger = use('Logger');
const Partner = use('App/Models/Partner');
const ServiceRequest = use('App/Models/ServiceRequest');
const Service = use('App/Models/Service');
const moment = require('moment');


class ServiceRequestController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      var curr = new Date();
      var week = [];

      for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i;
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
        let today = await partner
          .serviceRequests()
          .with('customer.user.image')
          .with('service')
          .where('date', day)
          .fetch();
        if (today.rows.length > 0) {
          let newToday = [];
          today.rows.forEach(async data => {
            console.log(data.$relations.customer.$attributes.id);
            let duration = await partner
              .services()
              .where('services.id', data.$relations.customer.$attributes.id)
              .fetch();
            duration = duration.rows[0].$relations.pivot.$attributes.time;
            data.start = new Date(day + 'T' + data.time).toISOString();
            data.end = moment(data.start).add(duration);
            data.duration = duration;
            newToday.push(data);
          });
          week.push({ [day]: newToday });
        } else {
          week.push({ [day]: today });
        }
      }
      return response.send({ week });
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async filter({ request, auth, response }) {
    const user = await auth.user;
    const partner = await Partner.findByOrFail('user_id', user.id);
    var services = [];
    const { from, to } = request.all();
    if (from && to) {
      services = await partner
        .serviceRequests()
        .with('customer.user.image')
        .with('service')
        .where('date', '>=', moment(from).format('YYYY-MM-DD'))
        .where('date', '<=', moment(to).format('YYYY-MM-DD'))
        .fetch();
      return response.send({
        services,
      });
    }
  }

  async show({ params, response }) {
    const serviceRequest = await ServiceRequest.query()
      .setHidden(['updated_at', 'created_at'])
      .with('customer.user.image')
      .with('service')
      .with('coupon')
      .with('address')
      .where('id', params.id)
      .fetch();
    return response.send(serviceRequest);
  }

  async appointment({ auth, request, response }) {
    const odayServices = await partner
      .serviceRequests()
      .with('customer.user')
      .with('service')
      .where('date', new Date().toISOString().slice(0, 10))
      .fetch();
  }

  async update({ params, response }) {
    const serviceRequest = await ServiceRequest.findOrFail(params.id);
    if (!serviceRequest) {
      return response.status(404).send({
        success: false,
        message: 'Serviço não encontrado',
      });
    }
    serviceRequest.merge({ status: 'finished' });
    await serviceRequest.save();
    return response.send(serviceRequest);
  }

  async confirmService({ params, response }) {
    const serviceRequest = await ServiceRequest.findOrFail(params.id);
    if (!serviceRequest) {
      return response.status(404).send({
        success: false,
        message: 'Serviço não encontrado',
      });
    }
    serviceRequest.merge({ status: 'confirmed' });
    await serviceRequest.save();
    return response.send(serviceRequest);
  }

  async updateCancel({ params, response }) {
    const serviceRequest = await ServiceRequest.findOrFail(params.id);
    if (!serviceRequest) {
      return response.status(404).send({
        success: false,
        message: 'Serviço não encontrado',
      });
    }
    serviceRequest.merge({ status: 'canceled' });
    await serviceRequest.save();
    return response.send(serviceRequest);
  }
}

module.exports = ServiceRequestController;
