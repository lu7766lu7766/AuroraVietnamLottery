'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BetSchema extends Schema
{
  up() {
    this.create('bets', (table) =>
    {
      table.increments()
      table.integer('user_id').notNullable()
      table.integer('game_type_id').notNullable()
      table.integer('point').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('bets')
  }
}

module.exports = BetSchema
