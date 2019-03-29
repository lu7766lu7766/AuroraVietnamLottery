'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointLogSchema extends Schema
{
  up() {
    this.create('point_logs', (table) =>
    {
      table.increments()
      table.integer('source_user_id').notNullable()
      table.integer('target_user_id').notNullable()
      table.integer('point').notNullable()
      table.integer('type_id').notNullable()
      // table.boolean('is_pass').defaultTo(false)
      table.timestamps()
    })
  }

  down() {
    this.drop('point_logs')
  }
}

module.exports = PointLogSchema
