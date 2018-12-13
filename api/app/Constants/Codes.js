class Codes
{
  static get SUCCESS() { return 0 }

  static get UNCATCH() {return 500}

  static get VALIDSTE_FAIL() { return 1000 }

  static get USER_OR_PASSWORD_ERROR() { return 2000}

  static get USER_EXISTS() { return 2001}

}

module.exports = Codes
