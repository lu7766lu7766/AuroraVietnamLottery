'use strict'

const Validator = require('./Validator')

class PageValidator extends Validator
{
  static get rules() {
    return {
      page: 'sometimes|number',
      perPage: 'sometimes|number'
    }
  }

  static get messages() {
    return {
      'page.number': 'page must be number',
      'perPage.number': 'perPage must be number'
    }
  }
}

module.exports = PageValidator
