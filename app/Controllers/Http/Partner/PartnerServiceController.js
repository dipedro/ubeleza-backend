'use strict';
const Partner = use('App/Models/Partner');
const Service = use('App/Models/Service');
const PartnerService= use('App/Models/PartnerService');
const Logger = use('Logger');
const { validate } = use('Validator');
const Image = use('App/Models/Image');
const { manage_single_upload } = use('App/Helpers');

class ServiceController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      const services = await partner.services().with('image').fetch();
      response.send(services);
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
      'service_type_id',
      'name',
      'description',
      'price',
      'time',
    ]);

    const rules = {
      name: `required`,
      service_type_id: `required`,
      description: `required`,
      price: 'required',
      time: 'required',
    };

    const messages = {
      'name.required': 'O nome do serviço é obrigatório!',
      'service_type_id.required': 'O tipo do serviço é obrigatorio!',
      'description.required': 'A descrição do serviço é obrigatoria!',
      'price.required': 'O valor do serviço é obrigatorio!',
      'time.required': 'O tempo do serviço é obrigatorio!',
    };

    const validation = await validate(data, rules, messages);
    if (validation.fails()) {
      const validation_messages = validation.messages().map(msgObject => {
        return msgObject.message;
      });

      return response.status(400).send({
        success: false,
        message: validation_messages,
      });
    }

    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);

      const fileJar = request.file('image', {
        types: ['image'],
        size: '2mb',
      });
      var image;
      if (fileJar) {
        const file = await manage_single_upload(fileJar);
        if (file.moved()) {
          image = await Image.create({
            path: file.fileName,
            size: file.size,
            original_name: file.clientName,
            extension: file.subtype,
          });
        }
      }

      const services = await partner.services().create({
        service_type_id: data.service_type_id,
        name: data.name,
        description: data.description,
        image_id: image ? image.id : null,
      });
      await partner.save();
      await partner.loadMany(['services']);

      console.log(services)
      const partnerservice = await PartnerService
      .query()
      .where('service_id', services.$attributes.id)
      .where('partner_id', partner.$attributes.id)
      .update({ price:data.price, time: data.time})
      
      return partner;

    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro' + error,
      });
    }
  }

  async show({ params, request, response }) {
    try {
      const service = await Service.query()
      .where('id', params.id)
      .with('image')
      .firstOrFail();
      if (service) {
        return service;
      } else {
        return response.status(404).send({
          success: false,
          message: 'Serviço não encontrado!',
        });
      }
    } catch (error) {
      return response.status(404).send({
        success: false,
        message: 'Erro '+error,
      });
    }
  }

  async update({ params, request, response, auth }) {
    
    const user = await auth.user;
    const partner = await Partner.findByOrFail('user_id', user.id);
    const data = request.only([
      'service_type_id',
      'name',
      'description',
      'price',
      'time',
    ]);

    const fileJar = request.file('image', {
      types: ['image'],
      size: '2mb',
    });
    var image;
    if (fileJar) {
      const file = await manage_single_upload(fileJar);
      if (file.moved()) {
        image = await Image.create({
          path: file.fileName,
          size: file.size,
          original_name: file.clientName,
          extension: file.subtype,
        });
      }
    }
    const rules = {
      name: `required`,
      service_type_id: `required`,
      description: `required`,
      price: 'required',
      time: 'required',
    };

    const messages = {
      'name.required': 'O nome do serviço é obrigatório!',
      'emissor.required': 'O tipo do serviço é obrigatorio!',
      'date.required': 'A descrição do serviço é obrigatoria!',
      'price.required': 'O valor do serviço é obrigatorio!',
      'time.required': 'O tempo do serviço é obrigatorio!',
    };

    const validation = await validate(data, rules, messages);
    if (validation.fails()) {
      const validation_messages = validation.messages().map(msgObject => {
        return msgObject.message;
      });

      return response.status(400).send({
        success: false,
        message: validation_messages,
      });
    }
    try {
      const service = await Service.findOrFail(params.id);
      if (service) {
        service.merge({
          service_type_id: data.service_type_id,
          name: data.name,
          description: data.description,
          image_id: image ? image.id : null,
        });
        await service.save();

        const partnerservice = await PartnerService
          .query()
          .where('service_id', service.$attributes.id)
          .where('partner_id', partner.$attributes.id)
          .update({ price:data.price, time: data.time})

        return service;
      } else {
        return response.status(404).send({
          success: false,
          message: 'Erro ao atualizar serviço! Serviço não encontrado!',
        });

      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao atualizar serviço!' + error,
      });
    }
  }

  async destroy({ params, response }) {
    try {
      const service = await Service.findOrFail(params.id);
      if (service) {
        await service.delete();
        return response.status(200);
      } else {
        return response.status(404).send({
          success: false,
          message: 'Erro ao deletar serviço! Serviço não encontrado!',
        });
      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao deletar serviço!' + error,
      });
    }
  }
}

module.exports = ServiceController;
