'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AddressSchema extends Schema {
  up() {
    this.create('addresses', table => {
      table.increments();
      table.string('country').nullable();
      table.string('state').nullable();
      table.string('city').nullable();
      table.string('district').nullable();
      table.string('address_type').nullable();
      table.string('address').nullable();
      table.string('number').nullable();
      table.string('address2').nullable();
      table.decimal('lat', 9, 6).notNullable();
      table.decimal('lon', 9, 6).notNullable();
      table.integer('range');
      table.string('zipcode').nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('addresses');
  }
}

module.exports = AddressSchema;
