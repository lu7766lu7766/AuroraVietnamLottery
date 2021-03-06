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

/** @type {import('@adonisjs/lucid/src/Factory')} */
const UserModel = use('Models/User')

class UserSeeder
{
  async run() {
    await UserModel.createMany([
      {
        user_name: 'lu7766',
        password: 'lu90354',
        nick_name: 'Jac Wang',
        point: '100000',
        role_id: 1
      },
      {
        user_name: 'root',
        password: 'Ab1234',
        nick_name: 'Admin',
        point: '0',
        role_id: 1
      }
    ])
  }
}

module.exports = UserSeeder
