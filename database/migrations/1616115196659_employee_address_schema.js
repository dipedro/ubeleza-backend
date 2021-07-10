'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class EmployeeAddressSchema extends Schema {
  up() {
    this.create('employee_addresses', table => {
      table.increments();
      table.integer('address_id').unsigned();
      table
        .foreign('address_id')
        .references('id')
        .on('addresses')
        .onDelete('cascade');
      table.integer('employee_id').unsigned();
      table
        .foreign('employee_id')
        .references('id')
        .on('employees')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('employee_addresses');
  }
}

module.exports = EmployeeAddressSchema;
