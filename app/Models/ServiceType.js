'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ServiceType extends Model {
  static get table() {
    return 'service_types';
  }

  static get hidden () {
    return ['created_at', 'updated_at', 'image_id']
  }

  image() {
    return this.belongsTo('App/Models/Image');
  }

  services() {
    return this.hasMany('App/Models/Service');
  }

  partners() {
    return this.belongsToMany('App/Models/Partner').pivotTable(
      'partner_service_types'
    );
  }
}

module.exports = ServiceType;
