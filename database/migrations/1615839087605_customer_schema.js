'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CustomerSchema extends Schema {
  up() {
    this.create('customers', table => {
      table.increments();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('customers');
  }
}

module.exports = CustomerSchema;
