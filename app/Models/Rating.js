'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Rating extends Model {
    static get table() {
        return 'ratings';
    }

    static get hidden() {
        return ['id',
          'created_at', 
          'updated_at'
        ];
    }

    service() {
      return this.belongsTo('App/Models/ServiceRequest');
    }
}

module.exports = Rating
