'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Bet extends Model
{
  user() {
    return this.hasOne('App/Models/User', 'user_id', 'id')
  }

  game_type() {
    return this.hasOne('App/Models/GameType', 'game_type_id', 'id')
  }

  numbers() {
    return this.hasMany('App/Models/BetNumber', 'id', 'bet_id')
  }
}

module.exports = Bet
