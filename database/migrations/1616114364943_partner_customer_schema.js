'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PartnerCustomerSchema extends Schema {
  up() {
    this.create('partner_customers', table => {
      table.increments();
      table.integer('partner_id').unsigned();
      table
        .foreign('partner_id')
        .references('id')
        .on('partners')
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
    this.drop('partner_customers');
  }
}

module.exports = PartnerCustomerSchema;
