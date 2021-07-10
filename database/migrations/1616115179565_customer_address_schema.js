'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CustomerAddressSchema extends Schema {
  up() {
    this.create('customer_addresses', table => {
      table.increments();
      table.integer('address_id').unsigned();
      table
        .foreign('address_id')
        .references('id')
        .on('addresses')
        .onDelete('cascade');
      table.integer('customer_id').unsigned();
      table
        .foreign('customer_id')
        .references('id')
        .on('customers')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('customer_addresses');
  }
}

module.exports = CustomerAddressSchema;
