'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Coupon extends Model {
    static get hidden() {
      return [
        'to', 
        //'code', 
        //'title', 
        //'off', 
        //'description', 
        'partner_id', 
        //'service_type_id', 
        //'service_id', 
        //'type', 
        'origin', 
        //'status', 
        //'expire_at', 
        'created_at', 
        'updated_at',
        'time_left',
      ];
    }

    partner() {
        return this.belongsTo('App/Models/Partner');
    }

    serviceRequest() {
      return this.hasMany('App/Models/ServiceRequest');
    }
}

module.exports = Coupon