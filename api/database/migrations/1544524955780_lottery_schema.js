'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LotterySchema extends Schema
{
  up() {
    this.create('lotteries', (table) =>
    {
      table.string('date').unique()
      _.range(1, 28).forEach(num =>
      {
        table.string('number' + num, 10).notNullable()
      })
      table.timestamps()
    })
  }

  down() {
    this.drop('lotteries')
  }
}

module.exports = LotterySchema
