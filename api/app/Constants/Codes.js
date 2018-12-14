class Codes
{
  static get SUCCESS() { return 0 }

  static get UNCATCH() {return 500}

  static get VALIDSTE_FAIL() { return 1000 }

  static get USER_OR_PASSWORD_ERROR() { return 2000}

  static get USER_EXISTS() { return 2001}

  static get CONNOT_ADD_POINT_YOURSELF() { return 2002}

  static get POINT_CANNOT_LESS_0() { return 2003}
}

module.exports = Codes
