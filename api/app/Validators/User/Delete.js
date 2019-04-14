'use strict'
const UserCodes = use('ApiCodes/User1000')

class UserValidator
{
  get rules() {
    return {
      userName: 'required|exists:users,user_name|not_in:lu7766,root'
    }
  }

  get messages() {
    return {
      'userName.required': UserCodes.USER_NAME_IS_REQUIRED,
      'userName.exists': UserCodes.USER_NOT_EXISTS,
      'userName.not_in': UserCodes.THIS_ADMIN_CANNOT_DELETE
    }
  }
}

module.exports = UserValidator
