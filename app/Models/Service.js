'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Service extends Model {
  static get table() {
    return 'services';
  }

  static get hidden () {
    return ['created_at', 'updated_at', 'image_id', 'service_type_id']
  }

  partners() {
    return this.belongsToMany('App/Models/Partner')
      .pivotTable('partner_services');
  }

  type() {
    return this.belongsTo('App/Models/ServiceType');
  }

  requests() {
    return this.hasMany('App/Models/ServiceRequest');
  }

  image() {
    return this.belongsTo('App/Models/Image');
  }
}

module.exports = Service;
