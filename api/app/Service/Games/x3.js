'use strict'
const BaseXGame = use('App/Service/Games/baseXGame')
const GameTypeConstant = use('Constants/GameType')

class X3 extends BaseXGame
{
  /**
   * 三星 x3
   * 選三個2位數的號碼，核對全部(27個)號後兩碼，三個號碼都中才算中獎
   * 中獎45倍
   */
  get gameTypeID() { return GameTypeConstant.X3_CODE }

  get needMatch() { return 3 }
}

module.exports = X3
