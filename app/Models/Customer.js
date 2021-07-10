'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Customer extends Model {
  static get table() {
    return 'customers';
  }

  static get hidden() {
    return ['user_id', 'created_at', 'updated_at'];
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  serviceRequests() {
    return this.hasMany('App/Models/ServiceRequest');
  }
}

module.exports = Customer;
