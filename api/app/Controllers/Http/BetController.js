'use strict'

const betService = Create.service('Bet')

class BetController
{
  async index(context) {

    await Validator('Bet').validateAll(context.request.all())

    return await betService.bet(context)
  }

  async gameTypeOptions() {
    return Constant('gameType').options()
  }
}

module.exports = BetController
