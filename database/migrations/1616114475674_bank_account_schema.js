'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BankAccountSchema extends Schema {
  up() {
    this.create('bank_accounts', table => {
      table.increments();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.integer('bank_id').unsigned();
      table.foreign('bank_id').references('id').on('banks').onDelete('cascade');
      table.integer('agency_number');
      table.integer('agency_digit');
      table.integer('acc_number');
      table.integer('acc_digit');
      table.string('acc_type');
      table.string('fullname', 254).notNullable();
      table.string('document', 20).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('bank_accounts');
  }
}

module.exports = BankAccountSchema;
