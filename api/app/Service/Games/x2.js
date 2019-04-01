'use strict'
const BaseXGame = use('Service/Games/baseXGame')
const GameTypeConstant = use('Constants/GameType')

class X2 extends BaseXGame
{
  /**
   * 二星 x2
   * 選兩個2位數的號碼，核對全部(27個)號後兩碼，兩個號碼都中才算中獎
   * 中獎10倍
   */
  get gameTypeID() { return GameTypeConstant.X2_CODE }

  get needMatch() { return 2 }
}

module.exports = X2
