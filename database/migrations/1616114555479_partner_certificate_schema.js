'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PartnerCertificateSchema extends Schema {
  up() {
    this.create('partner_certificates', table => {
      table.increments();
      table.integer('certificate_id').unsigned();
      table
        .foreign('certificate_id')
        .references('id')
        .on('available_certificates')
        .onDelete('cascade');
      table.integer('partner_id').unsigned();
      table
        .foreign('partner_id')
        .references('id')
        .on('partners')
        .onDelete('cascade');
      table.integer('file_id').unsigned();
      table
        .foreign('file_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade');
      table.string('title');
      table.string('emissor');
      table.date('date');
      table.text('description');
      table.timestamps();
    });
  }

  down() {
    this.drop('partner_certificates');
  }
}

module.exports = PartnerCertificateSchema;
