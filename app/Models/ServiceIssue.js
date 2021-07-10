'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ServiceIssue extends Model {

    static get table() {
      return 'service_issues';
    }
      
    static get hidden() {
      return ['created_at', 'updated_at'];
    }

    type() {
      return this.belongsTo('App/Models/ServiceIssueType');
    }
}

module.exports = ServiceIssue
