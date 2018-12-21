'use strict'

const Validator = require('./Validator')

// todo 碼數驗證，不同玩法，可以買的長度不一樣
class BetValidator extends Validator
{
  static get rules() {
    console.log()
    return {
      'gameTypeID': 'required',
      'point': 'required|number',
      'numbers': 'required|array',
      'numbers.*': 'min:2|max:2'
    }
  }

  static get messages() {
    return {
      'gameTypeID.required': 'game type is required',
      'point.required': 'point is required',
      'point.number': 'point is must be a number',
      'numbers.require': 'numbers is required',
      'numbers.array': 'numbers is must be a array'
      // 'numbers.*.min': 'too short'
      // 'numbers.*.max': 'too long'
    }
  }
}

module.exports = BetValidator
