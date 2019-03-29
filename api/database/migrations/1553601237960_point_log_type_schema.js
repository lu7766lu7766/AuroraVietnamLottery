'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PointLogTypeSchema extends Schema
{
  up() {
    this.create('point_log_types', (table) =>
    {
      table.integer('id').notNullable()
      table.string('name', 20).notNullable()
    })
  }

  down() {
    this.drop('point_log_types')
  }
}

module.exports = PointLogTypeSchema
