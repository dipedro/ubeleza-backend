'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class TransportMethod extends Model {
    static get table() {
        return 'transport_methods';
    }

    addresses() {
        return this.hasMany('App/Models/Address');
    }
}

module.exports = TransportMethod
