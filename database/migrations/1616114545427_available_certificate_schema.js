'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AvailableCertificateSchema extends Schema {
  up() {
    this.create('available_certificates', table => {
      table.increments();
      table.string('title');
      table.text('description');
      table.string('emissor');
      table.timestamps();
    });
  }

  down() {
    this.drop('available_certificates');
  }
}

module.exports = AvailableCertificateSchema;
