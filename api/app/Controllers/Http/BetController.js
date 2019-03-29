'use strict'

const betService = Create.service('Bet')

class BetController
{
  async index(context) {
    return await betService.bet(context)
  }

  async gameTypeOptions() {
    return Constant('gameType').options()
  }
}

module.exports = BetController
