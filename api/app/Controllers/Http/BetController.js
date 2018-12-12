'use strict'

const betService = Create.service('Bet')

class BetController
{
  test() {
    return betService.test()
  }
}

module.exports = BetController
