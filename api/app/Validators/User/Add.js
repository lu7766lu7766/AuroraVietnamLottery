'use strict'
const RoleContant = use('Constants/Role')
const UserCodes = use('ApiCodes/User1000')

class UserAddValidator
{
  get rules() {
    return {
      userName: 'required|unique:users,user_name',
      password: 'required',
      nickName: 'string',
      roleID: 'number|in:' + RoleContant.validateString()
    }
  }

  get messages() {
    return {
      'userName.required': UserCodes.USER_NAME_IS_REQUIRED,
      'userName.unique': UserCodes.USER_EXISTS,
      'password.required': UserCodes.PASSWORD_IS_REQUIRED,
      'roleID.in': UserCodes.ROLE_NOT_EXISTS
    }
  }
}

module.exports = UserAddValidator
