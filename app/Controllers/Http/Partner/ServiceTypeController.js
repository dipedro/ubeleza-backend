'use strict';

const { manage_single_upload } = require('../../../Helpers');

const Logger = use('Logger');

const ServiceType = use('App/Models/ServiceType');
const Service = use('App/Models/Service');
const Image = use('App/Models/Image');
const Database = use('Database');
class ServiceTypeController {
  async index({ auth, response }) {
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      var myServices = await partner.services().ids();
      const serviceTypes = await ServiceType.query()
        .with('image')
        .with('services', builder => {
          builder.whereNotIn('id', myServices).with('image');
        })
        .has('services')
        .fetch();
      return response.send(serviceTypes);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async show({ params, response }) {
    try {
      const serviceType = await ServiceType.find(params.id);
      response.send(serviceType.query().with('services.image').first());
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async myServices({ response, auth }) {
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      const services = await partner
        .services()
        .with('image')
        .with('type.image')
        .fetch();
      return response.status(200).send({
        services,
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao vincular dados! ' + error,
      });
    }
  }

  async showMyServices({ params, response, auth }) {
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      const service = await partner
        .services()
        .where('service_id', params.id)
        .with('image')
        .with('type')
        .fetch();
      return response.status(200).send({
        service,
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao vincular dados! ' + error,
      });
    }
  }

  async subscribe({ request, response, auth }) {
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      const { services } = request.all();
      services.map(async s => {
        const service = await Service.findOrFail(s);
        partner.services().attach([service.id]);
      });
      return response.status(200).send({
        success: true,
        message: 'Serviço(s) vinculado(s) com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao vincular dados! ' + error,
      });
    }
  }

  async update({ request, response, auth, params }) {
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      const { time, price, can_home } = request.all();
      const service = await Service.find(params.id);
      console.log(service)
      const fileJar = request.file('photo', {
        types: ['image'],
        size: '2mb',
      });
      if (fileJar) {
        const file = await manage_single_upload(fileJar);
        if (file.moved()) {
          const image = await Image.create({
            path: file.fileName,
            size: file.size,
            original_name: file.clientName,
            extension: file.subtype,
          });
          const res = await Database.table('partner_services')
            .where('service_id', service.id)
            .where('partner_id', partner.id)
            .update({ image_id: image.id });
        }
      }
      console.log(service)
      const res = await Database.table('partner_services')
        .where('service_id', service.id)
        .where('partner_id', partner.id)
        .update({ time, price, can_home, image_id: service.image_id });
      return response.status(200).send({
        success: true,
        message: 'Serviço atualizado com sucesso!',
      });
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async unsubscribe({ auth, request, response }) {
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      let { service } = request.all();
      service = await Service.findOrFail(service);
      await partner.services().detach([service.id]);
      return response.status(200).send({
        success: true,
        message: 'Serviço(s) desvinculado(s) com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao desvincular dados! ' + error,
      });
    }
  }
}

module.exports = ServiceTypeController;
