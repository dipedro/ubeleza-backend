'use strict';

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AlterCouponSchema extends Schema {
  up() {
    this.table('coupons', table => {
      table.integer('time_left');
    });
  }

  down() {
    this.table('coupons', table => {
      //Reverse alterations
    });
  }
}

module.exports = AlterCouponSchema;
