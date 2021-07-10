'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PolicySchema extends Schema {
  up () {
    this.create('policies', (table) => {
      table.increments()
      table.string('title')
      table.text('content')
      table.timestamps()
      
    })
  }

  down () {
    this.drop('policies')
  }
}

module.exports = PolicySchema
