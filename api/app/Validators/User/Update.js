'use strict'
const UserCodes = use('ApiCodes/User1000')

class UserValidator
{
  get rules() {
    return {
      userID: 'required|exists:users,user_id',
      password: 'sometimes|string',
      nickName: 'sometimes|string',
      roleID: 'number|in:' + RoleContant.validateString()
    }
  }

  get messages() {
    return {
      'userID.required': UserCodes.USER_ID_IS_REQUIRED,
      'userID.exists': UserCodes.USER_NOT_EXISTS,
      'roleID.in': UserCodes.ROLE_NOT_EXISTS
    }
  }
}

module.exports = UserValidator
