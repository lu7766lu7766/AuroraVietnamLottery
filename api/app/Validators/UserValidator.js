'use strict'

const Validator = require('./Validator')

class LoginValidator extends Validator
{
  static get rules() {
    return {
      userID: 'required|unique:users,user_id',
      password: 'required',
      name: 'sometimes|string',
      roleID: 'sometimes|number|in:' + Constant('Role').rule()
    }
  }

  static get messages() {
    return {
      'userID.required': 'id is required',
      'userID.unique': Codes.USER_EXISTS,
      'password.required': 'password is required'
    }
  }
}

module.exports = LoginValidator
