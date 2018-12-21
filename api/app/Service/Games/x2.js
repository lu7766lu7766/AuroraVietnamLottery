'use strict'
const BaseXGame = use('App/Service/Games/baseXGame')

class X2 extends BaseXGame
{
  /**
   * 二星 x2
   * 選兩個2位數的號碼，核對全部(27個)號後兩碼，兩個號碼都中才算中獎
   * 中獎10倍
   */
  get gameTypeID() { return Constant('GameType').X2_CODE }

  get needMatch() { return 2 }
}

module.exports = X2
