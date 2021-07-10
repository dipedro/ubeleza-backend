'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
  up () {
    this.create('services', (table) => {
      table.increments()
      table.string('name', 254).notNullable();
      table.text('description').notNullable();
      table.integer('service_type_id').unsigned();
      table.foreign('service_type_id')
        .references('id')
        .on('service_types')
        .onDelete('cascade');
      table.integer('image_id').unsigned();
      table
        .foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade');
      table.timestamps()
    })
  }

  down () {
    this.drop('services')
  }
}

module.exports = ServiceSchema
