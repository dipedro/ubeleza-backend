'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bank extends Model {
  bank_accouts() {
    return this.hasMany('App/Models/BankAccount');
  }
  
  image() {
    return this.belongsTo('App/Models/Image');
  }
}

module.exports = Bank
