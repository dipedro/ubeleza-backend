'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CreatePartnerServiceTypeSchema extends Schema {
  up() {
    this.create('partner_service_types', table => {
      table.increments();
      table.integer('service_type_id').unsigned();
      table
        .foreign('service_type_id')
        .references('id')
        .on('service_types')
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
    this.drop('partner_service_types');
  }
}

module.exports = CreatePartnerServiceTypeSchema;
