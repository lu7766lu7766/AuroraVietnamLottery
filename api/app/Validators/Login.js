'use strict'

class LoginValidator
{
  get rules() {
    return {
      userName: 'required',
      password: 'required'
    }
  }

  get messages() {
    const UserCodes = Codes('User1000')
    return {
      'userName.required': UserCodes.USER_NAME_IS_REQUIRED,
      'password.required': UserCodes.PASSWORD_IS_REQUIRED
    }
  }
}

module.exports = LoginValidator
