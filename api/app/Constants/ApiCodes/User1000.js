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

  static get USER_NOT_EXISTS() { return 1012 }

  static get ROLE_NOT_EXISTS() { return 1013 }

  static get USER_ID_IS_REQUIRED() { return 1014 }

  static get ADMIN_CANNOT_CHANGE_ROLE() { return 1015 }

  static get CANNOT_CHANGE_ADMIN_PROFILE() { return 1016 }

  static get THIS_ADMIN_CANNOT_DELETE() { return 1016 }

  static get PHONE_IS_REQUIRED() { return 1017 }

  static get PHONE_FORMAT_ERROR() { return 1018 }

  static get VERIFY_CODE_IS_REQUIRED() { return 1019 }

  static get VERIFY_CODE_LENGTH_ERROR() { return 1020 }

  static get VERIFY_CODE_ERROR() { return 1021 }

  static get VERIFY_CODE_IS_EXPIRED() { return 1022 }
}

module.exports = User1000
