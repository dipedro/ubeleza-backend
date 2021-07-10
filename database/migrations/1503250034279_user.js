'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments();
      table.string('email', 254).notNullable().unique();
      table.string('fullname', 254).notNullable();
      table.string('document', 20).notNullable().unique();
      table.string('phone').nullable().unique();
      table.timestamp('email_verified_at').nullable();
      table.integer('invited_by').nullable();
      table.string('password', 60).nullable();
      table.string('verification_code').nullable();
      table.string('facebook_id', 60).nullable();
      table.string('google_id', 60).nullable();
      table.integer('image_id').unsigned();
      table.enu('status', ['active', 'inactive', 'banished']).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
