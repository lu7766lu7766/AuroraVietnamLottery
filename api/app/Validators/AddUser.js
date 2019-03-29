'use strict'

class UserValidator
{
  get rules() {
    return {
      userName: 'required|unique:users,user_name',
      password: 'required',
      nickName: 'sometimes|string',
      roleID: 'sometimes|number|in:' + Constant('Role').validateString()
    }
  }

  get messages() {
    const UserCodes = Codes('User1000')
    return {
      'userName.required': UserCodes.USER_NAME_IS_REQUIRED,
      'userName.unique': UserCodes.USER_EXISTS,
      'password.required': UserCodes.PASSWORD_IS_REQUIRED
    }
  }
}

module.exports = UserValidator
