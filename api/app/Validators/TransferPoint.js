'use strict'

class TransferPointValidator
{
  get rules() {
    return {
      userName: 'required',
      point: 'required|number|min:1'
    }
  }

  get messages() {
    const userCodes = Codes('User1000')
    return {
      'userName.required': userCodes.USER_NAME_IS_REQUIRED,
      'point.required': userCodes.POINT_IS_REQUIRED,
      'point.number': userCodes.POINT_TYPE_ERROR,
      'point.min': userCodes.POINT_MORE_THEN_0
    }
  }
}

module.exports = TransferPointValidator
