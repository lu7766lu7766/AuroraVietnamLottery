'use strict'

/*
 |--------------------------------------------------------------------------
 | GameTypeSeeder
 |--------------------------------------------------------------------------
 |
 | Make use of the Factory instance to seed database with dummy data or
 | make use of Lucid models directly.
 |
 */

const GameType = use('App/Models/GameType')
/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class GameTypeSeeder
{
  async run() {

    // for (const type of game_type)
    // {
    //   let gameType = new GameType()
    //   gameType.name = type.name
    //   await gameType.save()
    // }

    _.forEach(Constant('GameType').enum(), async (name, id) =>
    {
      const gameType = Create.model('GameType')
      gameType.id = id
      gameType.name = name
      await gameType.save()
    })
  }
}

module.exports = GameTypeSeeder
