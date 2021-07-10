'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Banishment extends Model {
    static get table() {
        return 'banishments';
      }
        
      static get hidden() {
        return ['created_at', 'updated_at'];
      }

      user() {
        return this.belongsTo('App/Models/User');
      }

      banned_by() {
        return this.belongsTo('App/Models/BanishmentReason');
      }
}

module.exports = Banishment
