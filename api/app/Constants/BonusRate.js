const GameTypeConstant = use('Constants/GameType')

class RoleConstants
{
  static get LO() { return 3.27 }

  static get X2() { return 10 }

  static get X3() { return 45 }

  static get X4() { return 100 }

  static get TEN_PERCENT() { return 8.5 }

  static get THOUSAND_PERCENT() { return 400 }

  static enum() {
    return [
      {
        game_type_id: GameTypeConstant.LO_CODE,
        rate: this.LO
      },
      {
        game_type_id: GameTypeConstant.X2_CODE,
        rate: this.X2
      },
      {
        game_type_id: GameTypeConstant.X3_CODE,
        rate: this.X3
      },
      {
        game_type_id: GameTypeConstant.X4_CODE,
        rate: this.X4
      },
      {
        game_type_id: GameTypeConstant.KEP_CODE,
        rate: this.TEN_PERCENT
      },
      {
        game_type_id: GameTypeConstant.THREEC_CODE,
        rate: this.THOUSAND_PERCENT
      },
      {
        game_type_id: GameTypeConstant.DAU_CODE,
        rate: this.TEN_PERCENT
      },
      {
        game_type_id: GameTypeConstant.DIT_CODE,
        rate: this.TEN_PERCENT
      }
    ]
  }
}

module.exports = RoleConstants
