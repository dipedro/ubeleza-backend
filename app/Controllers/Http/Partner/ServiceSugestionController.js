'use strict'

const ServiceSugestion = use("App/Models/ServiceSugestion")
const Partner = use("App/Models/Partner");

class ServiceSugestionController {
  async store ({ request, response, auth }) {
    const user = await auth.user
    const {service_type_id, name, description} = request.all();
    const partner = await Partner.findByOrFail('user_id', user.id)
    const sugestion = await ServiceSugestion.create({
      service_type_id,
      name,
      description,
      partner_id: partner.id,
      status: 'waiting',
    })
    return response.status(200).send({
      success: true,
      message: 'Mensagem enviada com sucesso!',
    });
  }
}

module.exports = ServiceSugestionController
