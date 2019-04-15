'use strict'
const UserCodes = use('ApiCodes/User1000')
const RoleContant = use('Constants/Role')

class UserValidator
{
  get rules() {
    return {
      userID: 'required|exists:users,id',
      password: 'string',
      nickName: 'string',
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
