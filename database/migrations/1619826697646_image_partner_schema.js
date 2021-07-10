'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ImagePartnerSchema extends Schema {
  up () {
    this.create('image_partners', (table) => {
      table.increments()
      table.integer('image_id').unsigned();
      table
        .foreign('image_id')
        .references('id')
        .inTable('images')
        .onDelete('cascade');
      table.integer('partner_id').unsigned();
      table
        .foreign('partner_id')
        .references('id')
        .inTable('partners')
        .onDelete('cascade');
      table.timestamps()
    })
  }

  down () {
    this.drop('image_partners')
  }
}

module.exports = ImagePartnerSchema
