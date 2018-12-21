'use strict'

const Validator = require('./Validator')

class UserPointValidator extends Validator
{
  static get rules() {
    return {
      userID: 'required',
      point: 'required|number'
    }
  }

  static get messages() {
    return {
      'userID.required': 'id is required',
      'point.required': 'point is required',
      'point.number': 'point is must be a number'
    }
  }
}

module.exports = UserPointValidator
