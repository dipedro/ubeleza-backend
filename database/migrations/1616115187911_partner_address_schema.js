'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PartnerAddressSchema extends Schema {
  up() {
    this.create('partner_addresses', table => {
      table.increments();
      table.integer('address_id').unsigned();
      table
        .foreign('address_id')
        .references('id')
        .on('addresses')
        .onDelete('cascade');
      table.integer('partner_id').unsigned();
      table
        .foreign('partner_id')
        .references('id')
        .on('partners')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('partner_addresses');
  }
}

module.exports = PartnerAddressSchema;
