'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class QuestionType extends Model {
    static get table() {
      return 'question_types';
    }
    
    static get hidden() {
      return ['created_at', 'updated_at'];
    }

    questions() {
      return this.hasMany('App/Models/Question');
    }
}

module.exports = QuestionType
