'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BetNumberSchema extends Schema
{
  up() {
    this.create('bet_numbers', (table) =>
    {
      table.increments()
      table.integer('bet_id').notNullable()
      table.string('number', 10).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('bet_numbers')
  }
}

module.exports = BetNumberSchema
