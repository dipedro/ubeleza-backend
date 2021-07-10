'use strict';
const Partner = use('App/Models/Partner');
const Address = use('App/Models/Address');
const Logger = use('Logger');
const { validate } = use('Validator');
const { manage_single_upload } = use('App/Helpers');
const Image = use('App/Models/Image');

class AddressController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      const addresses = await partner.addresses().fetch();
      response.send(addresses);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async store({ request, response, auth }) {
    const data = request.only([
      'country',
      'state',
      'city',
      'district',
      'address_type',
      'address',
      'number',
      'address2',
      'zipcode',
      'lat',
      'lon',
      'range',
      "transport_method_id"
    ]);

    const user = await auth.user;
    const partner = await Partner.findByOrFail('user_id', user.id);

    const addresses = await partner.addresses().create({
      country: data.country,
      state: data.state,
      city: data.city,
      district: data.district,
      address_type: data.address_type,
      address: data.address,
      number: data.number,
      address2: data.address2,
      zipcode: data.zipcode,
      lat: data.lat,
      lon: data.lon,
      range: data.range,
      transport_method_id: data.transport_method_id
    });
    await partner.save();
    await partner.loadMany(['addresses']);

    return partner;
  }

  async show({ params, request, response }) {
    try {
      const address = await Address.findOrFail(params.id);
      if (address) {
        return address;
      } else {
        return response.status(404).send({
          success: false,
          message: 'Endereço não encontrado!',
        });
      }
    } catch (error) {
      return response.status(404).send({
        success: false,
        message: error,
      });
    }
  }

  async update({ params, request, response }) {
    const data = request.only([
      'country',
      'state',
      'city',
      'district',
      'address_type',
      'address',
      'number',
      'address2',
      'zipcode',
      'lat',
      'lon',
      'range',
      'transport_method_id'
    ]);
    try {
      const address = await Address.findOrFail(params.id);
      if (address) {
        address.merge({
          country: data.country,
          state: data.state,
          city: data.city,
          district: data.district,
          address_type: data.address_type,
          address: data.address,
          number: data.number,
          address2: data.address2,
          zipcode: data.zipcode,
          lat: data.lat,
          lon: data.lon,
          range: data.range,
          transport_method_id: data.transport_method_id
        });
        await address.save();

        return address;
      } else {
        return response.status(404).send({
          success: false,
          message: 'Erro ao atualizar endereço! Endereço não encontrado!',
        });
      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao atualizar endereço!' + error,
      });
    }
  }

  async destroy({ params, response }) {
    try {
      const address = await Address.findOrFail(params.id);
      if (address) {
        await address.delete();
        return response.status(200);
      } else {
        return response.status(404).send({
          success: false,
          message: 'Erro ao deletar endereço! Endereço não encontrado!',
        });
      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao deletar endereço!' + error,
      });
    }
  }
}

module.exports = AddressController;
