'use strict'

const Validator = require('./Validator')

class PageValidator extends Validator
{
  static get rules() {
    return {
      isSettle: 'sometimes|number|in:0,1'
    }
  }

  static get messages() {
    return {
      'isSettle.number': 'isSettle must be number'
    }
  }
}

module.exports = PageValidator
