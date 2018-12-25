'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointLogSchema extends Schema
{
  up() {
    this.create('point_logs', (table) =>
    {
      table.increments()
      table.integer('creator_id').notNullable()
      table.integer('user_id').notNullable()
      table.integer('point').notNullable()
      table.boolean('is_pass').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('point_logs')
  }
}

module.exports = PointLogSchema
