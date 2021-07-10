'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ServiceIssueType extends Model {
    static get table() {
      return 'service_issue_types';
    }
    
    static get hidden() {
      return ['created_at', 'updated_at'];
    }

    serviceIssues() {
      return this.hasMany('App/Models/ServiceIssue');
    }
}

module.exports = ServiceIssueType
