class Common
{
  static get OK() { return 0 }

  static get ERROR() { return -1 }

  static get MODEL_NOT_FOUND() { return -2 }

  static get CREATE_FAIL() { return -3 }

  static get UPDATE_FAIL() { return -4 }

  static get PAGE_TYPE_ERROR() { return -5 }

  static get PERPAGE_TYPE_ERROR() { return -6 }
}

module.exports = Common
