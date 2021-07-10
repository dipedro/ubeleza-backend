'use strict'

const Database = use('Database');

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.table('users', (table) => {
      // alter table
      table.string('token') // token
      table.timestamp('token_created_at').defaultTo(Database.fn.now()) // date when token was created
    })
  }

  down() {
    this.table('users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = UserSchema
