'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class PaymentMethodSchema extends Schema {
  up() {
    this.create('payment_methods', table => {
      table.increments();
      table.enum('method', ['credit_card', 'debit_card']);
      table.string('token');
      table.string('card_holder_name');
      table.bigInteger('card_number');
      table.string('card_expiration_date');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('id').on('users').onDelete('cascade');
      table.string('status');
      table.timestamps();
    });
  }

  down() {
    this.drop('payment_methods');
  }
}

module.exports = PaymentMethodSchema;
