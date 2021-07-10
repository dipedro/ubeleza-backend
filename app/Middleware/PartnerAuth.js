'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Partner = use('App/Models/Partner');
const User = use('App/Models/User');

class PartnerAuth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response, auth }, next) {
    const user = await auth.user;
    const partner = await user.partner().with('addresses').fetch();
    if(partner.$attributes.status === 'approved') {
      await next()
    }
    else if (partner.$attributes.status === 'waiting') {
      return response.status(403).send({
        success: false,
        message: 'Usuário ainda não aprovado para ser um parceiro.',
      });
    }
    else {
      return response.status(403).send({
        success: false,
        message: 'Usuário não tem permissão para acessar como parceiro.',
      });
    }
  }
}

module.exports = PartnerAuth
