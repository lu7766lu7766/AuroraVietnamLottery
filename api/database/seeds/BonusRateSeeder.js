'use strict'

/*
 |--------------------------------------------------------------------------
 | BonusRateSeeder
 |--------------------------------------------------------------------------
 |
 | Make use of the Factory instance to seed database with dummy data or
 | make use of Lucid models directly.
 |
 */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class BonusRateSeeder
{
  async run() {
    const DB = use('Database')
    await DB.table('bonus_rates')
      .insert(Constant('BonusRate').enum())
  }
}

module.exports = BonusRateSeeder
