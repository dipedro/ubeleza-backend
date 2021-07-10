'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ServiceSugestion extends Model {
    static get table() {
        return 'service_sugestions';
      }
        
      static get hidden() {
        return ['created_at', 'updated_at'];
      }
  
      type() {
        return this.belongsTo('App/Models/ServiceType');
      }

      partner() {
        return this.belongsTo('App/Models/Partner');
      }
}

module.exports = ServiceSugestion
