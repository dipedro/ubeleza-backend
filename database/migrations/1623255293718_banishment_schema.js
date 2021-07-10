'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BanishmentSchema extends Schema {
  up () {
    this.create('banishments', (table) => {
      table.increments()
      table.integer('user_id').unsigned();
      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table.integer('banned_by').unsigned();
      table
        .foreign('banned_by')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table.text('description').nullable()
      table.datetime('expire_at');
      table.timestamps()
    })
  }

  down () {
    this.drop('banishments')
  }
}

module.exports = BanishmentSchema
