'use strict'

const UserCodes = use('ApiCodes/User1000')

class TransferPointValidator
{
  get rules() {
    return {
      userName: 'required',
      point: 'required|number|min:1'
    }
  }

  get messages() {
    return {
      'userName.required': UserCodes.USER_NAME_IS_REQUIRED,
      'point.required': UserCodes.POINT_IS_REQUIRED,
      'point.number': UserCodes.POINT_TYPE_ERROR,
      'point.min': UserCodes.POINT_MORE_THEN_0
    }
  }
}

module.exports = TransferPointValidator
