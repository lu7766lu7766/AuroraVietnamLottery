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
    const DB = use('Database')
    await DB.table('bets')
      .insert({
        user_id: '1',
        game_type_id: '1',
        point: '100',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      })
  }
}

module.exports = BetSeeder
