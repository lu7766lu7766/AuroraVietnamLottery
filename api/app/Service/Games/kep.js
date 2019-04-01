'use strict'
const BaseGame = use('App/Service/Games/base')
const GameTypeConstant = use('Constants/GameType')

class KEP extends BaseGame
{
  /**
   * kep
   * 不給選號，會自動買入00~99十個對號，核對特別號後兩碼
   * 中獎機率1/10，中獎8.5倍
   */
  get gameTypeID() { return GameTypeConstant.KEP_CODE }

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
