'use strict'

const TransportMethod = use('App/Models/TransportMethod');
const Logger = use('Logger');

class TransportMethodController {
   async index({ response }) {
    try {
      const transportMethods = await TransportMethod.all();
      return response.send(transportMethods);
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }
}

module.exports = TransportMethodController
