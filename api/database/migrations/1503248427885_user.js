'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema
{
  up() {
    this.create('users', (table) =>
    {
      table.increments()
      table.string('user_id', 20).notNullable().unique()
      table.string('password', 100).notNullable()
      table.string('name', 20)
      table.integer('point').notNullable()
      table.integer('role_id')
      table.integer('parent_id')
      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
