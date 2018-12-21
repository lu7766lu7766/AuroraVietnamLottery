'use strict'
const GameBase = use('App/Service/Games/base')

class ThreeC extends GameBase
{
  /**
   * 特三 3c
   * 選一個3位數的號碼，核對特別號後三碼
   * 中獎機率1/1000，中獎400倍
   */
  get gameTypeID() { return Constant('GameType').THREEC_CODE }

  hasMatched() {
    return this.betNumbers[0] == this.specialNumber.substr(-3)
  }

  countWinPoint() {
    return this.hasMatched()
      ? this.betPoint * this.bunusRate.rate
      : 0
  }
}

module.exports = ThreeC
