'use strict'
const GameBase = use('App/Service/Games/base')

class DIT extends GameBase
{
  /**
   * dau
   * 選一個1位數的號碼，核對特別號最後一碼
   * 中獎機率1/10，中獎8.5倍
   */
  get gameTypeID() { return Constant('GameType').DIT_CODE }

  hasMatched() {
    return this.betNumbers[0] == this.specialNumber.substr(-1)
  }

  countWinPoint() {
    return this.hasMatched()
      ? this.betPoint * this.bunusRate.rate
      : 0
  }
}

module.exports = DIT
