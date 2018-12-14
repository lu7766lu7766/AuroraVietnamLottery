'use strict'

/*
 |--------------------------------------------------------------------------
 | LotterySeeder
 |--------------------------------------------------------------------------
 |
 | Make use of the Factory instance to seed database with dummy data or
 | make use of Lucid models directly.
 |
 */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class LotterySeeder
{
  async run() {
    let body = {}
    _.range(1, 28).forEach(num =>
    {
      body['number' + num] = Math.round(Math.random() * 99999)
    })
    await DB.table('lotteries').insert(Object.assign(body, {
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }))
  }
}

module.exports = LotterySeeder
