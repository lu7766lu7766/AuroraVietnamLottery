'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class GameType extends Model
{
  static get createdAtColumn() {
    return
  }

  static get updatedAtColumn() {
    return
  }

  bonus_rate() {
    return this.hasMany('App/Models/BonusRate')
  }
}

module.exports = GameType
