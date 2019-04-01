'use strict'

const GameTypeConstant = use('Constants/GameType')

class GamesFactory
{
  constructor(game_type) {
    return use('App/Service/Games/' + GameTypeConstant.enum()[game_type])
  }
}

module.exports = GamesFactory
