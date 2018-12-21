'use strict'

class GamesFactory
{
  constructor(game_type) {
    return use('App/Service/Games/' + Constant('GameType').enum()[game_type])
  }
}

module.exports = GamesFactory
