'use strict'

const Validator = require('./Validator')

class PageValidator extends Validator
{
  static get rules() {
    return {
      status: 'sometimes|number|in:-1,1'
    }
  }

  static get messages() {
    return {
      'isSettle.number': 'status must be number'
    }
  }
}

module.exports = PageValidator
