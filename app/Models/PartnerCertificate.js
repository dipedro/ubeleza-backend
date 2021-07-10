'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class PartnerCertificate extends Model {
  static get table() {
    return 'partner_certificates';
  }

  partner() {
    return this.belongsTo('App/Models/Partner');
  }

  available_certificate() {
    return this.belongsTo('App/Models/AvailableCertificate');
  }

  file() {
    return this.belongsTo('App/Models/Image');
  }
}

module.exports = PartnerCertificate;
