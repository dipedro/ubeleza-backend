'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CreditMovimentationSchema extends Schema {
  up() {
    this.create('credit_movimentations', table => {
      table.increments();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.integer('service_request_id').unsigned();
      table
        .foreign('service_request_id')
        .references('id')
        .on('service_requests')
        .onDelete('cascade');
      table.enum('type', ['credit', 'debit']);
      table.string('name', 254).notNullable();
      table.double('amount', 10, 2);
      table.datetime('when').nullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('credit_movimentations');
  }
}

module.exports = CreditMovimentationSchema;
