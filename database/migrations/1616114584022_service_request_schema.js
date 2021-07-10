'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class ServiceRequestSchema extends Schema {
  up() {
    this.create('service_requests', table => {
      table.increments();
      table.integer('customer_id').unsigned();
      table
        .foreign('customer_id')
        .references('id')
        .on('customers')
        .onDelete('cascade');
      table.integer('service_id').unsigned();
      table
        .foreign('service_id')
        .references('id')
        .inTable('services')
        .onDelete('cascade');
      table.integer('quantity').unsigned();
      table.date('date').notNullable();
      table.time('time').notNullable();
      table.integer('coupon_id').unsigned();
      table
        .foreign('coupon_id')
        .references('id')
        .on('coupons')
        .onDelete('cascade');
      table.integer('address_id').unsigned();
      table
        .foreign('address_id')
        .references('id')
        .on('addresses')
        .onDelete('cascade');
      table.integer('partner_id').unsigned();
      table
        .foreign('partner_id')
        .references('id')
        .on('partners')
        .onDelete('cascade');
      table.integer('payment_method_id').unsigned();
      table
        .foreign('payment_method_id')
        .references('id')
        .on('payment_methods')
        .onDelete('cascade');
      table.integer('transport_method_id').unsigned();
      table
        .foreign('transport_method_id')
        .references('id')
        .on('transport_methods')
        .onDelete('cascade');
      table.enum('status', ['waiting', 'confirmed', 'finished', 'canceled']);
      table.timestamps();
    });
  }

  down() {
    this.drop('service_requests');
  }
}

module.exports = ServiceRequestSchema;
