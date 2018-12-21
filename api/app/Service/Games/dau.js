'use strict'
const GameBase = use('App/Service/Games/base')

class DAU extends GameBase
{
  /**
   * dau
   * 選一個1位數的號碼，核對特別號後兩碼的第一碼(倒數第二碼)
   * 中獎機率1/10，中獎8.5倍
   */
  get gameTypeID() { return Constant('GameType').DAU_CODE }

  hasMatched() {
    return this.betNumbers[0] == this.specialNumber.substr(-2, 1)
  }

  countWinPoint() {
    return this.hasMatched()
      ? this.betPoint * this.bunusRate.rate
      : 0
  }
}

module.exports = DAU
