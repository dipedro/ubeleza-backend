'use strict';
const Partner = use('App/Models/Partner');
const PartnerCertificate = use('App/Models/PartnerCertificate');
const Logger = use('Logger');
const { validate } = use('Validator');
const { manage_single_upload } = use('App/Helpers');
const Image = use('App/Models/Image');
class PartnerCertificateController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      const certificates = await partner.certificates().fetch();
      response.send(certificates);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async store({ request, response, auth }) {
    const data = request.only(['title', 'description', 'emissor', 'date']);
    const rules = {
      title: `required`,
      emissor: `required`,
      date: `required`,
    };

    const messages = {
      'title.required': 'O título do certificado é obrigatório!',
      'emissor.required': 'O emissor do certificado é obrigatorio!',
      'date.required': 'A data de emissão do certificado é obrigatoria!',
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
    const user = await auth.user;
    const partner = await Partner.findByOrFail('user_id', user.id);

    const fileJar = request.file('file', {
      types: ['image', 'pdf'],
      size: '2mb',
    });
    var file;
    if (fileJar) {
      const fileU = await manage_single_upload(fileJar);
      if (fileU.moved()) {
        file = await Image.create({
          path: fileU.fileName,
          size: fileU.size,
          original_name: fileU.clientName,
          extension: fileU.subtype,
        });
      }
    }

    const certificates = await partner.certificates().create({
      title: data.title,
      description: data.description,
      date: data.date,
      file_id: file ? file.id : null,
      emissor: data.emissor,
    });
    await partner.save();
    await partner.loadMany(['certificates']);

    return partner;
  }

  async show({ params, request, response }) {
    try {
      const certificate = await PartnerCertificate.findOrFail(params.id);
      if (certificate) {
        return certificate;
      }
    } catch (error) {
      return response.status(404).send({
        success: false,
        message: 'Certificado não encontrado!',
      });
    }
  }

  async update({ params, request, response }) {
    const data = request.only(['title', 'description', 'emissor', 'date']);
    const rules = {
      title: `required`,
      emissor: `required`,
      date: `required`,
    };

    const messages = {
      'title.required': 'O título do certificado é obrigatório!',
      'emissor.required': 'O emissor do certificado é obrigatorio!',
      'date.required': 'A data de emissão do certificado é obrigatoria!',
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
      const certificate = await PartnerCertificate.findOrFail(params.id);
      if (certificate) {
        certificate.merge({
          title: data.title,
          description: data.description,
          date: data.date,
          emissor: data.emissor,
        });
        await certificate.save();

        return certificate;
      }
    } catch (error) {
      return response.status(404).send({
        success: false,
        message: 'Erro ao atualizar certificado! Certificado não encontrado!',
      });
    }
  }

  async destroy({ params, response }) {
    try {
      const certificate = await PartnerCertificate.findOrFail(params.id);
      if (certificate) {
        await certificate.delete();
        return response.status(200);
      }
    } catch (error) {
      return response.status(404).send({
        success: false,
        message: 'Erro ao deletar certificado! Certificado não encontrado!',
      });
    }
  }
}

module.exports = PartnerCertificateController;
