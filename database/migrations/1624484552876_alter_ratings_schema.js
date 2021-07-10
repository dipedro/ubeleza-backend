'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AlterRatingsSchema extends Schema {
  up() {
    this.table('ratings', table => {
      table.boolean('seen');
    });
  }

  down() {
    this.table('ratings', table => {
      // reverse alternations
    });
  }
}

module.exports = AlterRatingsSchema;
