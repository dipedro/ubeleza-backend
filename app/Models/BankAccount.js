'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class BankAccount extends Model {
  bank() {
    return this.belongsTo('App/Models/Bank');
  }
  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = BankAccount
