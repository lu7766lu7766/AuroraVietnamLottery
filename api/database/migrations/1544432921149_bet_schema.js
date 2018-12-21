'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BetSchema extends Schema
{
  up() {
    this.create('bets', (table) =>
    {
      table.increments()
      table.string('lotteries_date').notNullable()
      table.integer('user_id').notNullable()
      table.integer('game_type_id').notNullable()
      table.integer('point').notNullable()
      table.boolean('is_settle').default(false).notNullable()
      table.boolean('test_field').default(false).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('bets')
  }
}

module.exports = BetSchema
