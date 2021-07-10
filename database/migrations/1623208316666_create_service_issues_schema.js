'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateServiceIssuesSchema extends Schema {
  up () {
    this.create('service_issues', (table) => {
      table.increments()
      table.integer('service_issue_type_id').unsigned();
      table
        .foreign('service_issue_type_id')
        .references('id')
        .on('service_issue_types')
        .onDelete('cascade');
      table.integer('service_request_id').unsigned();
      table
        .foreign('service_request_id')
        .references('id')
        .on('service_requests')
        .onDelete('cascade');
      table.text('description').nullable()
      table.string('status');
      table.text('answer').nullable()
      table.enum('origin', ['partner', 'customer']);
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
    this.drop('service_issues')
  }
}

module.exports = CreateServiceIssuesSchema
