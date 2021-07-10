'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateQuestionTypesSchema extends Schema {
  up () {
    this.create('question_types', (table) => {
      table.increments()
      table.string('title')
      table.timestamps()
    })
  }

  down () {
    this.drop('question_types')
  }
}

module.exports = CreateQuestionTypesSchema
