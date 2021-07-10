'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateServiceIssueTypesSchema extends Schema {
  up () {
    this.create('service_issue_types', (table) => {
      table.increments()
      table.string('title')
      table.timestamps()
    })
  }

  down () {
    this.drop('service_issue_types')
  }
}

module.exports = CreateServiceIssueTypesSchema
