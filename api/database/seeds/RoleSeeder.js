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
const RoleModel = use('Models/Role')
const RoleConstant = use('Constants/Role')

class RoleSeeder
{
  async run() {
    _.forEach(RoleConstant.enum(), async (name, id) =>
    {
      const role = new RoleModel()
      role.id = id
      role.name = name
      await role.save()
    })
  }
}

module.exports = RoleSeeder
