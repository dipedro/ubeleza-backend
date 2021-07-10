'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PartnerSchema extends Schema {
  up() {
    this.create('partners', table => {
      table.increments();
      table.integer('image_id').unsigned();
      table.string('legal_name', 254);
      table.string('public_name');
      table.text('bio');
      table.string('legal_document', 20);
      table.decimal('exp_time').notNullable();
      table.string('how_meet', 254);
      table.string('other_app', 254);
      table.string('instagram', 100);
      table.string('facebook', 100);
      table.enu('status', ['approved', 'rejected', 'waiting']);
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('partners');
  }
}

module.exports = PartnerSchema;
