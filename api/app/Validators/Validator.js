'use strict'

const Validator = use('Validator')

class myValidator
{
  static get rules() {
    return {}
  }

  static get messages() {
    return {}
  }

  static async validateAll(input) {
    this.input = input
    const validation = await Validator.validateAll(input, this.rules, this.messages)

    if (validation.fails())
    {
      throw [Codes.VALIDSTE_FAIL, _.map(validation.messages(), 'message')]
    }
    else
    {
      return validation
    }
  }
}

module.exports = myValidator
