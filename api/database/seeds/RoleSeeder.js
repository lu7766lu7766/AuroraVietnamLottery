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
    _.forEach(Constant('Role').enum(), async (name, id) =>
    {
      const role = Create.model('Role')
      role.id = id
      role.name = name
      await role.save()
    })
  }
}

module.exports = RoleSeeder