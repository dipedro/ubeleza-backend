'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RatingSchema extends Schema {
  up() {
    this.create('ratings', table => {
      table.increments();
      table.integer('from').unsigned();
      table.foreign('from').references('id').on('users').onDelete('cascade');
      table.integer('to').unsigned();
      table.foreign('to').references('id').on('users').onDelete('cascade');
      table.enum('type', ['to_partner', 'to_customer']);
      table.text('feedback').nullable();
      table.double('stars', 8, 2).nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('ratings');
  }
}

module.exports = RatingSchema;
