'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BanksSchema extends Schema {
  up() {
    this.create('banks', table => {
      table.increments();
      table.integer('code').unique();
      table.string('name');
      table.integer('image_id').unsigned();
      table
        .foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('banks');
  }
}

module.exports = BanksSchema;
