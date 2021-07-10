'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ChatRoomSchema extends Schema {
  up() {
    this.create('chat_rooms', table => {
      table.increments();
      table.integer('user_id1').unsigned();
      table
        .foreign('user_id1')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table.integer('user_id2').unsigned();
      table
        .foreign('user_id2')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table.string('user_ws_id1');
      table.string('user_ws_id2');
      table.timestamps();
    });
  }

  down() {
    this.drop('chat_rooms');
  }
}

module.exports = ChatRoomSchema;
