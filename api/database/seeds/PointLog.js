'use strict'

/*
 |--------------------------------------------------------------------------
 | RoleSeeder
 |--------------------------------------------------------------------------
 |
 | Make use of the Factory instance to seed database with dummy data or
 | make use of Lucid models directly.
 |
 */

/** @type {import('@adonisjs/lucid/src/Factory')} */
const PointLogModel = use('Models/PointLog')

class PointLog
{
  async run() {
    const user_id = +(await GetIncrement('users'))
    await PointLogModel.createMany([
      {
        source_user_id: user_id,
        target_user_id: user_id,
        point: 100000,
        type_id: 1
      },
      {
        source_user_id: user_id,
        target_user_id: user_id,
        point: 100,
        type_id: 0
      }
    ])
  }
}

module.exports = PointLog
