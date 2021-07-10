'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ServiceTypeSchema extends Schema {
  up() {
    this.create('service_types', table => {
      table.increments();
      table.string('name', 255);
      table.text('description');
      table.integer('image_id').unsigned();
      table.timestamps();

      table
        .foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('service_types');
  }
}

module.exports = ServiceTypeSchema;
