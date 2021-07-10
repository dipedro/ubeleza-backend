'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ChatMessageSchema extends Schema {
  up() {
    this.create('chat_messages', table => {
      table.increments();
      table.integer('from').unsigned();
      table.foreign('from').references('id').on('users').onDelete('cascade');
      table.integer('to').unsigned();
      table.foreign('to').references('id').on('users').onDelete('cascade');
      table.text('message');
      table.boolean('readed');
      table.timestamps();
    });
  }

  down() {
    this.drop('chat_messages');
  }
}

module.exports = ChatMessageSchema;
