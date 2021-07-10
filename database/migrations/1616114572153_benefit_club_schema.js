'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BenefitClubSchema extends Schema {
  up() {
    this.create('benefit_clubs', table => {
      table.increments();
      table.string('title');
      table.text('description');
      table.string('link');
      table.timestamps();
    });
  }

  down() {
    this.drop('benefit_clubs');
  }
}

module.exports = BenefitClubSchema;
