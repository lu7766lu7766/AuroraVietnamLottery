'use strict'

const Validator = require('./Validator')

class LoginValidator extends Validator
{
  static get rules() {
    return {
      userID: 'required',
      password: 'required'
    }
  }

  static get messages() {
    return {
      'userID.required': 'id is required',
      'password.required': 'password is required'
    }
  }
}

module.exports = LoginValidator
