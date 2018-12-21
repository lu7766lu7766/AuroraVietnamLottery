'use strict'

class LO
{
  /**
   * lo
   * 選一個2位數的號碼，核對全部(27個)號後兩碼，依號碼出現次數計算獎勵
   * 中一個號碼3.27倍，以此類推
   */
  get gameTypeID() { return Constant('GameType').LO_CODE }

  countMatchedNumbers() {
    const betNum = this.betNumbers[0]
    return _.countBy(this.lotteryLast2Numbers, num => num == betNum).true
  }

  countWinPoint() {
    return this.betPoint * this.countMatchedNumbers() * this.bunusRate.rate
  }
}

module.exports = LO
