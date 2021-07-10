'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class PartnerService extends Model {

  static get table() {
    return 'partner_services';
  }

  static get hidden () {
    return ['created_at', 'updated_at', 'image_id']
  }

  partners() {
    return this.belongsToMany('App/Models/Partner')
     
  }

  services() {
    return this.belongsToMany('App/Models/Service')

  }


  image() {
    return this.belongsTo('App/Models/Image');
  }
}

module.exports = PartnerService


