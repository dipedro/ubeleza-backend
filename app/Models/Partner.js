'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Partner extends Model {
  static get table() {
    return 'partners';
  }

  user() {
    return this.belongsTo('App/Models/User');
  }

  services() {
    return this.belongsToMany('App/Models/Service')
      .pivotTable('partner_services')
      .withPivot(['time', 'price', 'can_home']);
  }

  addresses() {
    return this.belongsToMany('App/Models/Address').pivotTable(
      'partner_addresses'
    );
  }

  images() {
    return this.belongsToMany('App/Models/Image').pivotTable(
      'image_partners'
    );
  }

  serviceRequests() {
    return this.hasMany('App/Models/ServiceRequest');
  }

  certificates() {
    return this.hasMany('App/Models/PartnerCertificate');
  }

  coupons() {
    return this.hasMany('App/Models/Coupon');
  }

  ratings() {
    return this.hasMany('App/Models/Rating');
  }

  customers() {
    return this.belongsToMany('App/Models/Customer')
      .pivotTable('partner_customers')
      .withPivot(['favorited']);;
  }
}

module.exports = Partner;
