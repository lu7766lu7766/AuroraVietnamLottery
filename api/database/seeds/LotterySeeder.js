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
    body.date = '2018-12-17'
    body.number1 = '46365'
    // body.number1 = '46366'
    body.number2 = '59917'
    body.number3 = '16680'
    body.number4 = '55318'
    body.number5 = '30230'
    body.number6 = '24324'
    body.number7 = '17794'
    body.number8 = '64353'
    body.number9 = '25382'
    body.number10 = '59178'
    body.number11 = '9320'
    body.number12 = '1706'
    body.number13 = '4619'
    body.number14 = '0567'
    body.number15 = '4866'
    body.number16 = '2328'
    body.number17 = '1998'
    body.number18 = '4059'
    body.number19 = '7079'
    body.number20 = '9881'
    body.number21 = '721'
    body.number22 = '147'
    body.number23 = '132'
    body.number24 = '37'
    body.number25 = '60'
    body.number26 = '32'
    body.number27 = '20'
    // _.range(1, 28).forEach(num =>
    // {
    //   body['number' + num] = Math.round(Math.random() * 99999)
    // })
    await DB.table('lotteries').insert(Object.assign(body, {
      created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss')
    }))
  }
}

module.exports = LotterySeeder
