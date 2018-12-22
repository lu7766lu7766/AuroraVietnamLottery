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
    const bet_id = +(await GetIncrement('bets')) - 1
    await DB.table('bet_numbers').insert([
      // 1 lo one number
      {
        bet_id: +bet_id + 1, number: '65',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 2 lo two number
      {

        bet_id: +bet_id + 2, number: '20',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 3 lo loss
      {

        bet_id: +bet_id + 3, number: '99',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 4 x2
      {
        bet_id: +bet_id + 4, number: '20',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 4, number: '32',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 5 x3
      {
        bet_id: +bet_id + 5, number: '20',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 5, number: '32',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 5, number: '60',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 6 x4
      {
        bet_id: +bet_id + 6, number: '20',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 6, number: '32',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 6, number: '60',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 6, number: '37',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 7 kep
      {
        bet_id: +bet_id + 7, number: '00',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '11',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '22',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '33',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '44',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '55',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '66',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '77',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '88',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      {
        bet_id: +bet_id + 7, number: '99',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 8 3c
      {
        bet_id: +bet_id + 8, number: '365',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 9 dau
      {
        bet_id: +bet_id + 9, number: '6',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      },
      // 10 dit
      {
        bet_id: +bet_id + 10, number: '5',
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
        updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
      }
    ])
  }
}

module.exports = BetNumberSeeder
