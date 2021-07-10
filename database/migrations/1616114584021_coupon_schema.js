'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class CouponSchema extends Schema {
  up() {
    this.create('coupons', table => {
      table.increments();
      table.string('to');
      table.string('code').unique();
      table.string('title');
      table.double('off', 10, 2);
      table.string('description');
      table.integer('partner_id').unsigned();
      table.foreign('partner_id').references('id').on('partners').onDelete('cascade');
      table.integer('service_type_id').unsigned();
      table.foreign('service_type_id').references('id').on('service_types').onDelete('cascade');
      table.integer('service_id').unsigned();
      table.foreign('service_id').references('id').on('services').onDelete('cascade');
      table.enum('type', ['general', 'category', 'service']);
      table.enum('origin', ['partner', 'system']);
      table.enum('status', ['active', 'paused']);
      table.datetime('expire_at');
      table.timestamps();
    });
  }

  down() {
    this.drop('coupons');
  }
}

module.exports = CouponSchema;