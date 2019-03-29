class User1000
{
  static get USER_NAME_IS_REQUIRED() { return 1001 }

  static get PASSWORD_IS_REQUIRED() { return 1002 }

  static get USER_OR_PASSWORD_ERROR() { return 1003 }

  static get USER_EXISTS() { return 1004 }

  static get POINT_CANNOT_LESS_0() { return 1005 }

  static get USER_NOT_FOUND() { return 1006 }

  static get NO_PERMISSION() { return 1007 }

  static get POINT_IS_REQUIRED() { return 1008 }

  static get POINT_TYPE_ERROR() { return 1009 }

  static get POINT_MORE_THEN_0() { return 1010 }

  static get CANNOT_TRANSFER_TO_YOURSELF() { return 1011 }
}

module.exports = User1000
