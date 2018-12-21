'use strict'

/*
 |--------------------------------------------------------------------------
 | BetSeeder
 |--------------------------------------------------------------------------
 |
 | Make use of the Factory instance to seed database with dummy data or
 | make use of Lucid models directly.
 |
 */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BetSeeder
{
  async run() {
    await DB.table('bets')
      .insert({
        lotteries_date: '17122018',
        user_id: '1',
        game_type_id: '1',
        point: '100',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      })
  }
}

module.exports = BetSeeder
