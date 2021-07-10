'use strict';

const Address = use('App/Models/Address');
const Partner = use('App/Models/Partner');
const ServiceRequest = use('App/Models/ServiceRequest');
const moment = require('moment');
class RadarController {
  async index({ request, response, auth }) {
    let data = request.only(['lat', 'lon']);

    const user = await auth.user;
    const partner = await Partner.findByOrFail('user_id', user.id);
    const partnerAddress = await partner.addresses().fetch();
    data.range = 10;

    if (partnerAddress.rows.length > 0) {
      data.range = partnerAddress.rows[0].$attributes.range;
    }

    console.log(data);
    const today = new Date();
    console.log(moment(today).format('HH:mm:ss'));
    const addresses_ids = await Address.query()
      .nearBy(data.lat, data.lon, data.range)
      .ids();

    const addresses = await Address.query()
      .nearBy(data.lat, data.lon, data.range)
      .fetch();

    const service = await ServiceRequest.query()
      .with('service')
      .where('status', 'queue')
      .where('date', '>=', moment(today).format('YYYY-MM-DD'))
      .where('time', '>=', moment(today).format('HH:mm:ss'))
      .whereIn('address_id', addresses_ids)
      .first();

    if (service) {
      service.merge({
        status: 'waiting',
      });
      service.save();
    }

    return { service };
  }

  async accept({ params, auth, response }) {
    const user = await auth.user;
    const partner = await user.partner().fetch();

    const service = await ServiceRequest.findOrFail(params.id);
    service.merge({
      partner_id: partner.id,
      status: 'confirmed',
    });
    service.save();
    return response.send({
      success: true,
      message: 'Serviço aceito com sucesso!',
    });
  }

  async decline({ params, request, response }) {
    const service = await ServiceRequest.findOrFail(params.id);
    service.merge({
      status: 'waiting',
    });
    service.save();
    return response.send({
      success: true,
      message: 'Serviço rejeitado com sucesso!',
    });
  }
}

module.exports = RadarController;
