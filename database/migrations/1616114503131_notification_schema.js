'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class NotificationSchema extends Schema {
  up() {
    this.create('notifications', table => {
      table.increments();
      table.integer('from');
      table.integer('to');
      table.integer('model_id');
      table.string('type');
      table.string('content');
      table.boolean('readed');
      table.enum('role', ['partner', 'customer', 'employee']);
      table.timestamps();
    });
  }

  down() {
    this.drop('notifications');
  }
}

module.exports = NotificationSchema;
