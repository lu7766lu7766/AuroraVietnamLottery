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
      .insert([
        {
          // 1 lo one number
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '1',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 2 lo two number
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '1',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 3 lo loss
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '1',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 4 x2
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '2',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 5 x3
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '3',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 6 x4
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '4',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 7 kep
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '5',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 8 3c
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '6',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 9 dau
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '7',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        },
        {
          // 10 dit
          lotteries_date: '17122018',
          user_id: '1',
          game_type_id: '8',
          bet_point: '100',
          created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
          updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
        }
      ])
  }
}

module.exports = BetSeeder
