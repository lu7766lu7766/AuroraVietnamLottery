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
const Factory = use('Factory')

class RoleSeeder
{
  async run() {
    await DB.table('point_log_types').insert([
      {id: 0, name: 'add'},
      {id: 1, name: 'transfer'}
    ])
  }
}

module.exports = RoleSeeder
