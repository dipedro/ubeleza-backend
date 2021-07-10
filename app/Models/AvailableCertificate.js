'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class AvailableCertificate extends Model {
  static get table() {
    return 'available_certificates';
  }

  partners() {
    return this.hasMany('App/Models/PartnerCertificate');
  }
}

module.exports = AvailableCertificate;
