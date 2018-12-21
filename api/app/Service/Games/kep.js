'use strict'
const GameBase = use('App/Service/Games/base')

class KEP extends GameBase
{
  /**
   * kep
   * 不給選號，會自動買入00~99十個對號，核對特別號後兩碼
   * 中獎機率1/10，中獎8.5倍
   */
  get gameTypeID() { return Constant('GameType').KEP_CODE }

  hasMatchedNumbers() {
    return _.includes(this.betNumbers, this.specialNumber.substr(-2))
  }

  countWinPoint() {
    return this.hasMatchedNumbers()
      ? this.betPoint * this.bunusRate.rate
      : 0
  }
}

module.exports = KEP
