class RoleConstants
{
  static get ADMIN_CODE() { return 1 }

  static get SUPPLIER_CODE() { return 2 }

  static get GAMER_CODE() { return 3 }

  static get ADMIN() { return 'admin' }

  static get SUPPLIER() { return 'supplier' }

  static get GAMER() { return 'gamer' }

  static enum() {
    return {
      [this.ADMIN_CODE]: this.ADMIN,
      [this.SUPPLIER_CODE]: this.SUPPLIER,
      [this.GAMER_CODE]: this.GAMER
    }
  }

  static validateString() {
    return [this.ADMIN_CODE, this.SUPPLIER_CODE, this.GAMER_CODE].join(',')
  }
}

module.exports = RoleConstants
