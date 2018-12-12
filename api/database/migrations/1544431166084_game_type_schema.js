'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GameTypeSchema extends Schema
{
  up() {
    this.create('game_types', (table) =>
    {
      table.increments()
      table.string('name', 60).notNullable()
    })
  }

  down() {
    this.drop('game_types')
  }
}

module.exports = GameTypeSchema
