'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CommentSchema extends Schema {
  up() {
    this.create('comments', table => {
      table.increments();
      table.integer('from').unsigned();
      table.foreign('from').references('id').on('users').onDelete('cascade');
      table.integer('to').unsigned();
      table.foreign('to').references('id').on('users').onDelete('cascade');
      table.enum('type', ['to_partner', 'to_customer']);
      table.text('comment').nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('comments');
  }
}

module.exports = CommentSchema;
