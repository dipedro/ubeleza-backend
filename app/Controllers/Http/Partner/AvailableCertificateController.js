'use strict';

const AvailableCertificate = use('App/Models/AvailableCertificate');
const Logger = use('Logger');
class AvailableCertificateController {
  async index({ request, response, view }) {
    try {
      const certificates = await AvailableCertificate.all();
      response.send(certificates);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async show({ params, request, response, view }) {
    try {
      const certificate = await AvailableCertificate.findOrFail(params.id);
      return response.send({ certificate });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }
}

module.exports = AvailableCertificateController;
