'use strict'

const betService = App.make('Service/Bet')
const GameTypeConstant = use('Constants/GameType')

class BetController
{
  async index(context) {
    return await betService.bet(context)
  }

  async gameTypeOptions() {
    return GameTypeConstant.options()
  }
}

module.exports = BetController
