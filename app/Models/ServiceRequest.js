'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ServiceRequest extends Model {
  static get table() {
    return 'service_requests';
  }

  static get hidden () {
    return ['created_at', 'updated_at', 'customer_id', 'service_id', 'coupon_id', 'address_id', 'partner_id', 'payment_method_id', 'transport_method_id']
  }

  customer() {
    return this.belongsTo('App/Models/Customer');
  }

  address() {
    return this.belongsTo('App/Models/Address');
  }

  serviceType() {
    return this.belongsTo('App/Models/ServiceType');
  }

  service() {
    return this.belongsTo('App/Models/Service');
  }

  ratings() {
    return this.hasMany('App/Models/Rating');
  }

  partner() {
    return this.belongsTo('App/Models/Partner');
  }

  coupon() {
    return this.belongsTo('App/Models/Coupon');
  }

  serviceRequest() {
    return this.hasOne('App/Models/ServiceRequest');
  }
}

module.exports = ServiceRequest;
