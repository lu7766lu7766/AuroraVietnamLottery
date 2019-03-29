'use strict'

/*
 |--------------------------------------------------------------------------
 | UserSeeder
 |--------------------------------------------------------------------------
 |
 | Make use of the Factory instance to seed database with dummy data or
 | make use of Lucid models directly.
 |
 */

// const Database = use('Database')
const User = use('App/Models/User')

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class UserSeeder
{
  async run() {
    // const users = await Database.table('users')
    // const user = new User()
    const user = Create.model('User')

    user.user_name = 'lu7766'
    user.password = 'lu90354'
    user.nick_name = 'Jac Wang'
    user.point = '100000'
    user.role_id = 1

    await user.save()
  }
}

module.exports = UserSeeder
