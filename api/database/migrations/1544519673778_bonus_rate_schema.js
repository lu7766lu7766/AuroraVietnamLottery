'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BonusRateSchema extends Schema
{
  up() {
    this.create('bonus_rates', (table) =>
    {
      table.increments()
      table.integer('game_type_id').notNullable()
      table.integer('match_count').notNullable()
      table.decimal('rate').notNullable()
    })
  }

  down() {
    this.drop('bonus_rates')
  }
}

module.exports = BonusRateSchema
