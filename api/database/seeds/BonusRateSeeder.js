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
const BonusRateConstant = use('Constants/BonusRate')

class BonusRateSeeder
{
  async run() {
    await DB.table('bonus_rates')
      .insert(BonusRateConstant.enum())
  }
}

module.exports = BonusRateSeeder
