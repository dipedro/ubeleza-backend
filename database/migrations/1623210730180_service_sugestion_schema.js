'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSugestionSchema extends Schema {
  up () {
    this.create('service_sugestions', (table) => {
      table.increments()
      table.integer('service_type_id').unsigned();
      table
        .foreign('service_type_id')
        .references('id')
        .on('service_types')
        .onDelete('cascade');
      table.integer('partner_id').unsigned();
      table
        .foreign('partner_id')
        .references('id')
        .on('partners')
        .onDelete('cascade');
      table.text('description').nullable()
      table.string('name');
      table.string('status');
      table.timestamps()
    })
  }

  down () {
    this.drop('service_sugestions')
  }
}

module.exports = ServiceSugestionSchema
