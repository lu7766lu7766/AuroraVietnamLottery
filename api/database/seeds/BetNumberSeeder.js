'use strict'

/*
 |--------------------------------------------------------------------------
 | BetNumberSeeder
 |--------------------------------------------------------------------------
 |
 | Make use of the Factory instance to seed database with dummy data or
 | make use of Lucid models directly.
 |
 */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BetNumberSeeder
{
  async run() {
    await DB.table('bet_numbers').insert([
      {
        bet_id: '1', number: '1',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: '1', number: '2',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      }
    ])
  }
}

module.exports = BetNumberSeeder
