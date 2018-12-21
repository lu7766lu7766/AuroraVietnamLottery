class RoleConstants
{
  static get LO() { return 3.27 }

  static get X2() { return 10 }

  static get X3() { return 45 }

  static get X4() { return 100 }

  static get TEN_PERCENT() { return 8.5 }

  static get THOUSAND_PERCENT() { return 400 }

  static enum() {
    const gameType = Constant('GameType')
    return [
      {
        game_type_id: gameType.LO_CODE,
        rate: this.LO
      },
      {
        game_type_id: gameType.X2_CODE,
        rate: this.X2
      },
      {
        game_type_id: gameType.X3_CODE,
        rate: this.X3
      },
      {
        game_type_id: gameType.X4_CODE,
        rate: this.X4
      },
      {
        game_type_id: gameType.KEP_CODE,
        rate: this.TEN_PERCENT
      },
      {
        game_type_id: gameType.THREEC_CODE,
        rate: this.THOUSAND_PERCENT
      },
      {
        game_type_id: gameType.DAU_CODE,
        rate: this.TEN_PERCENT
      },
      {
        game_type_id: gameType.DIT_CODE,
        rate: this.TEN_PERCENT
      }
    ]
  }
}

module.exports = RoleConstants
