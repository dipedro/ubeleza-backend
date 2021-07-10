'use strict'

const Faq = use("App/Models/Faq")

class FaqController {
  async index ({ request, response, view }) {
    const faqs = await Faq.query().where('to', 'partner').fetch()
    return response.send({faqs});
  }

  async show ({ params, request, response }) {
    const faq = await Faq.findOrFail(params.id)
    if(!faq) {
      return response.status(404).send({
        success: false,
        message: "Questão não encontrada",
      });
    }
    return response.send(faq);
  }
}

module.exports = FaqController
