'use strict'

const Validator = require('./Validator')

class PassPointValidator extends Validator
{
  static get rules() {
    return {
      id: 'required|number'
    }
  }

  static get messages() {
    return {}
  }
}

module.exports = PassPointValidator
