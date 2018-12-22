'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BetSchema extends Schema
{
  up() {
    const rand = Math.round(Math.random() * 100000)
    this.create('bets', (table) =>
    {
      table.increments()
      // table.string('id', 100).notNullable().unique()
      table.string('lotteries_date').notNullable()
      table.integer('user_id').notNullable()
      table.integer('game_type_id').notNullable()
      table.integer('bet_point').notNullable()
      table.boolean('is_settle').default(false).notNullable()
      table.integer('win_point').default(0).notNullable()
      table.timestamps()
    }).raw('ALTER TABLE `bets` AUTO_INCREMENT=' + rand)
  }

  down() {
    this.drop('bets')
  }
}

module.exports = BetSchema
