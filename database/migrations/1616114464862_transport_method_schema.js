'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class TransportMethodSchema extends Schema {
  up() {
    this.create('transport_methods', table => {
      table.increments();
      table.string('name').notNullable();
      table.boolean('active').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('transport_methods');
  }
}

module.exports = TransportMethodSchema;
