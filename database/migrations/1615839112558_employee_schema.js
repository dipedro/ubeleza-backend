'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EmployeeSchema extends Schema {
  up() {
    this.create('employees', table => {
      table.increments();
      table.string('responsibility', 254);
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('employees');
  }
}

module.exports = EmployeeSchema;
