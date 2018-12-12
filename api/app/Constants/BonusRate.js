class RoleConstants
{
  static get LO_ONE_NUMBER() { return 3.27 }

  static get LO_TWO_NUMBER() { return 10 }

  static get LO_THREE_NUMBER() { return 45 }

  static get LO_FOUR_NUMBER() { return 100 }

  static get TEN_PERCENT() { return 8.5 }

  static get THOUSAND_PERCENT() { return 400 }

  static enum() {
    const gameType = Constant('GameType')
    return [
      {
        game_type_id: gameType.LO_CODE,
        match_count: 1,
        rate: this.LO_ONE_NUMBER
      },
      {
        game_type_id: gameType.LO_CODE,
        match_count: 2,
        rate: this.LO_TWO_NUMBER
      },
      {
        game_type_id: gameType.LO_CODE,
        match_count: 3,
        rate: this.LO_THREE_NUMBER
      },
      {
        game_type_id: gameType.LO_CODE,
        match_count: 4,
        rate: this.LO_FOUR_NUMBER
      },
      {
        game_type_id: gameType.KEP_CODE,
        match_count: 1,
        rate: this.TEN_PERCENT
      },
      {
        game_type_id: gameType.THREEC_CODE,
        match_count: 1,
        rate: this.THOUSAND_PERCENT
      },
      {
        game_type_id: gameType.DAU_CODE,
        match_count: 1,
        rate: this.TEN_PERCENT
      },
      {
        game_type_id: gameType.DIT_CODE,
        match_count: 1,
        rate: this.TEN_PERCENT
      }
    ]
  }
}

module.exports = RoleConstants
