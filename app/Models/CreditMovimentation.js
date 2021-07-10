'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class CreditMovimentation extends Model {
  static get hidden() {
    return ['id',
      'created_at', 
      'updated_at'
    ];
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  serviceRequest() {
    return this.belongsTo('App/Models/ServiceRequest');
  }
}

module.exports = CreditMovimentation;
