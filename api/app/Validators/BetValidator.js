'use strict'

const Validator = require('./Validator')

class BetValidator extends Validator
{
  static getSizeString(val) {
    return `min:${val}|max:${val}`
  }

  static get rules() {
    const gameTypeRules = Constant('GameType').rules()
    return {
      'gameTypeID': 'required',
      'point': 'required|number',
      'numbers': 'required|array|' + this.getSizeString(gameTypeRules[this.input.gameTypeID].length),
      'numbers.*': this.getSizeString(gameTypeRules[this.input.gameTypeID].strlen)
    }
  }

  static get messages() {
    return {
      'gameTypeID.required': 'game type is required',
      'point.required': 'point is required',
      'point.number': 'point is must be a number',
      'numbers.require': 'numbers is required',
      'numbers.array': 'numbers is must be a array',
      'numbers.min': 'numbers quantity is invalid',
      'numbers.max': 'numbers quantity is invalid',
      'numbers.*.min': 'number length is invalid',
      'numbers.*.max': 'number length is invalid'
    }
  }
}

module.exports = BetValidator
