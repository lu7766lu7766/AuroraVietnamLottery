class PointLogTypeConstants
{
  static get ADD_CODE() { return 0 }

  static get TRANSFER_CODE() { return 1 }

  static get ADD() { return 'add'}

  static get TRANSFER() { return 'transfer'}

  static get SELLER_CODE() { return -1 }

  static get BUYER_CODE() { return 1 }

  static enum() {
    return {
      [this.ADD_CODE]: this.ADD,
      [this.TRANSFER_CODE]: this.TRANSFER
    }
  }
}

module.exports = PointLogTypeConstants
