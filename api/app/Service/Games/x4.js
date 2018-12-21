'use strict'
const BaseXGame = use('App/Service/Games/baseXGame')

class X4 extends BaseXGame
{
  /**
   * 四星 x4
   * 選四個2位數的號碼，核對全部(27個)號後兩碼，四個號碼都中才算中獎
   * 中獎100倍
   */
  get gameTypeID() { return Constant('GameType').X4_CODE }

  get needMatch() { return 4 }
}

module.exports = X4
