'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateQuestionSchema extends Schema {
  up () {
    this.create('questions', (table) => {
      table.increments()
      table.integer('question_type_id').unsigned();
      table
        .foreign('question_type_id')
        .references('id')
        .on('question_types')
        .onDelete('cascade');
      table.text('description').nullable()
      table.string('status');
      table.text('answer').nullable()
      table.enum('origin', ['partner', 'customer']);
      table.integer('user_id').unsigned();
      table
        .foreign('user_id')
        .references('id')
        .inTable('users')
        .onDelete('cascade');
      table.integer('file_id').unsigned();
      table
        .foreign('file_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade');
      table.timestamps()
    })
  }

  down () {
    this.drop('questions')
  }
}

module.exports = CreateQuestionSchema
