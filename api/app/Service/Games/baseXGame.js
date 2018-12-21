'use strict'
const GameBase = use('App/Service/Games/base')

class BaseXGame extends GameBase
{
  get needMatch() { return -1 }

  countMatchedNumbers() {
    let matchedCount = 0

    _.forEach(this.betNumbers, betNum =>
    {
      matchedCount += _.includes(this.lotteryLast2Numbers, betNum)
        ? 1
        : 0
    })
    return matchedCount
  }

  countWinPoint() {
    return this.countMatchedNumbers() == this.needMatch
      ? this.betPoint * this.bunusRate.rate
      : 0
  }
}

module.exports = BaseXGame
