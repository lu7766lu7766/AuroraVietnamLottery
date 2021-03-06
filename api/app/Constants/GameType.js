class GameTypeConstants
{
  static get LO_CODE() { return 1 }

  static get X2_CODE() { return 2 }

  static get X3_CODE() { return 3 }

  static get X4_CODE() { return 4 }

  static get KEP_CODE() { return 5}

  static get THREEC_CODE() { return 6}

  static get DAU_CODE() { return 7 }

  static get DIT_CODE() { return 8 }

  static get LO() { return 'lo'}

  static get X2() { return 'x2'}

  static get X3() { return 'x3'}

  static get X4() { return 'x4'}

  static get KEP() { return 'kep'}

  static get THREEC() { return '3c'}

  static get DAU() { return 'dau'}

  static get DIT() { return 'dit' }

  static enum() {
    return {
      [this.LO_CODE]: this.LO,
      [this.X2_CODE]: this.X2,
      [this.X3_CODE]: this.X3,
      [this.X4_CODE]: this.X4,
      [this.KEP_CODE]: this.KEP,
      [this.THREEC_CODE]: this.THREEC,
      [this.DAU_CODE]: this.DAU,
      [this.DIT_CODE]: this.DIT
    }
  }

  static rules() {
    return {
      [this.LO_CODE]: {
        length: 1,
        strlen: 2
      },
      [this.X2_CODE]: {
        length: 2,
        strlen: 2
      },
      [this.X3_CODE]: {
        length: 3,
        strlen: 2
      },
      [this.X4_CODE]: {
        length: 4,
        strlen: 2
      },
      [this.KEP_CODE]: {
        length: 10,
        strlen: 2
      },
      [this.THREEC_CODE]: {
        length: 1,
        strlen: 3
      },
      [this.DAU_CODE]: {
        length: 1,
        strlen: 1
      },
      [this.DIT_CODE]: {
        length: 1,
        strlen: 1
      }
    }
  }

  static options() {
    return [
      {
        code: this.LO_CODE,
        name: this.LO,
        length: 1,
        strlen: 2
      },
      {
        code: this.X2_CODE,
        name: this.X2,
        length: 2,
        strlen: 2
      },
      {
        code: this.X3_CODE,
        name: this.X3,
        length: 3,
        strlen: 2
      },
      {
        code: this.X4_CODE,
        name: this.X4,
        length: 4,
        strlen: 2
      },
      {
        code: this.KEP_CODE,
        name: this.KEP,
        length: 0,
        strlen: 2
      },
      {
        code: this.THREEC_CODE,
        name: this.THREEC,
        length: 1,
        strlen: 3
      },
      {
        code: this.DAU_CODE,
        name: this.DAU,
        length: 1,
        strlen: 1
      },
      {
        code: this.DIT_CODE,
        name: this.DIT,
        length: 1,
        strlen: 1
      }
    ]
  }
}

module.exports = GameTypeConstants
