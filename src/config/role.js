export class Role
{
  static get ADMIN() { return 1 }

  static get SUPPLIER() { return 2 }

  static get GAMER() { return 3 }

  static get ADMIN_TXT() { return 'Admin'}

  static get SUPPLIER_TXT() { return 'Supplier'}

  static get GAMER_TXT() { return 'Gamer'}

  static enum() {
    return {
      [this.ADMIN]: this.ADMIN_TXT,
      [this.SUPPLIER]: this.SUPPLIER_TXT,
      [this.GAMER]: this.GAMER_TXT
    }
  }
}