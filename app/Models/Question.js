'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ServiceIssue extends Model {
  static get table() {
    return 'questions';
  }

  static get hidden() {
    return ['created_at', 'updated_at'];
  }

  creator() {
    return this.belongsTo('App/Models/User');
  }

  type() {
    return this.belongsTo('App/Models/QuestionType');
  }
}

module.exports = ServiceIssue;
