'use strict'

const betService = Create.service('Bet')

class BetController
{
  async index(context) {
    Validator('Bet').validateAll(context.request.all())
    return await betService.bet(context)
  }
}

module.exports = BetController
