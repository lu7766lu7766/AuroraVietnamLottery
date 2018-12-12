class RoleConstants
{
  static get ADMIN_CODE() { return 1 }

  static get SUPPLIES_CODE() { return 2 }

  static get GAMER_CODE() { return 3 }

  static get ADMIN() { return 'admin' }

  static get SUPPLIES() { return 'supplier' }

  static get GAMER() { return 'gamer' }

  static enum() {
    return {
      [this.ADMIN_CODE]: this.ADMIN,
      [this.SUPPLIES_CODE]: this.SUPPLIES,
      [this.GAMER_CODE]: this.GAMER
    }
  }
}

module.exports = RoleConstants
