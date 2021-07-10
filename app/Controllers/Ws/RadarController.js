'use strict';

const Address = use('App/Models/Address');
const ServiceRequest = use('App/Models/ServiceRequest');

class RadarController {
  constructor({ socket, request, auth, data }) {
    this.socket = socket;
    this.request = request;
    console.log('connected socket id %s', socket.id);
    console.log('request %s', request._body);
    console.log('data %s', data);

    //socket.emit('previusRadar', 'teste', { services, addresses });
    //auth.user.then(data => {
    //  console.log(data);
    //});

    const send = {
      lat: '-29.336937',
      lon: '-49.727386',
      range: '500',
    };
    this.loadRadar(send).then(response => {
      console.log(response);
      this.socket.emit('previusRadar', response);
    });
  }

  async onMessage(data) {}

  async loadRadar(data) {
    const addresses_ids = await Address.query()
      .nearBy(data.lat, data.lon, data.range)
      .ids();

    const addresses = await Address.query()
      .nearBy(data.lat, data.lon, data.range)
      .fetch();

    const services = await ServiceRequest.query()
      .with('service')
      .where('status', 'queue')
      .whereIn('address_id', addresses_ids)
      .fetch();

    return services;
  }
}

module.exports = RadarController;
