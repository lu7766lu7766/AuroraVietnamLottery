class GameTypeConstants
{
  static get LO_CODE() { return 1 }

  static get KEP_CODE() { return 2}

  static get THREEC_CODE() { return 3}

  static get DAU_CODE() { return 4 }

  static get DIT_CODE() { return 5 }

  static get LO() { return 'lo'}

  static get KEP() { return 'kep'}

  static get THREEC() { return '3c'}

  static get DAU() { return 'dau'}

  static get DIT() { return 'dit' }

  static enum() {
    return {
      [this.LO_CODE]: this.LO,
      [this.KEP_CODE]: this.KEP,
      [this.THREEC_CODE]: this.THREEC,
      [this.DAU_CODE]: this.DAU,
      [this.DIT_CODE]: this.DIT
    }
  }
}

module.exports = GameTypeConstants
