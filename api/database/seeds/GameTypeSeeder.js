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

const GameTypeModel = use('Models/GameType')
const GameTypeConstant = use('Constants/GameType')

/** @type {import('@adonisjs/lucid/src/Factory')} */

class GameTypeSeeder
{
  async run() {

    // for (const type of game_type)
    // {
    //   let gameType = new GameType()
    //   gameType.name = type.name
    //   await gameType.save()
    // }

    _.forEach(GameTypeConstant.enum(), async (name, id) =>
    {
      const gameType = new GameTypeModel()
      gameType.id = id
      gameType.name = name
      await gameType.save()
    })
  }
}

module.exports = GameTypeSeeder
