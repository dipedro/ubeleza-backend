'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FaqSchema extends Schema {
  up () {
    this.create('faqs', (table) => {
      table.increments()
      table.text('question')
      table.text('answer')
      table.enum('to', ['partner', 'customer', 'employee']);
      table.timestamps()
    })
  }

  down () {
    this.drop('faqs')
  }
}

module.exports = FaqSchema
