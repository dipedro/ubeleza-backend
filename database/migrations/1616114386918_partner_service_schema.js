'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PartnerServiceSchema extends Schema {
  up() {
    this.create('partner_services', table => {
      table.increments();
      table.integer('service_id').unsigned();
      table
        .foreign('service_id')
        .references('id')
        .on('services')
        .onDelete('cascade');
      table.integer('partner_id').notNullable().unsigned();
      table
        .foreign('partner_id')
        .references('id')
        .on('partners')
        .onDelete('cascade');
      table.time('time').notNullable();
      table.decimal('price').notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('partner_services');
  }
}

module.exports = PartnerServiceSchema;
