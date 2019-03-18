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
      const messages = _.map(validation.messages(), 'message')
      const fmsg = _.filter(messages, msg => _.isNumber(msg))
      throw [
        fmsg.length
          ? fmsg[0]
          : Codes.VALIDSTE_FAIL,
        messages
      ]
    }
    else
    {
      return validation
    }
  }
}

module.exports = myValidator
