'use strict'

class BetValidator
{
  static getSizeString(val) {
    return `min:${val}|max:${val}`
  }

  get rules() {
    const gameTypeRules = Constant('GameType').rules()
    return {
      'gameTypeID': 'required',
      'betPoint': 'required|number',
      'numbers': 'required|array|'
        + BetValidator.getSizeString(gameTypeRules[this.ctx.request.input('gameTypeID')].length),
      'numbers.*': 'numberString|'
        + BetValidator.getSizeString(gameTypeRules[this.ctx.request.input('gameTypeID')].strlen)
    }
  }

  get messages() {
    const betCodes = Codes('Bet2000')
    return {
      'gameTypeID.required': betCodes.GAME_TYPE_IS_REQUIRED,
      'betPoint.required': betCodes.BET_POINT_IS_REQUIRED,
      'betPoint.number': betCodes.BET_POINT_TYPE_ERROR,
      'numbers.require': betCodes.NUMBERS_IS_REQUIRED,
      'numbers.array': betCodes.NUMBERS_TYPE_ERROR,
      'numbers.min': betCodes.NUMBERS_QUANTITY_IS_INVALID,
      'numbers.max': betCodes.NUMBERS_QUANTITY_IS_INVALID,
      'numbers.*.numberString': betCodes.NUMBER_TYPE_ERROR,
      'numbers.*.min': betCodes.NUMBER_LENGTH_IS_INVALID,
      'numbers.*.max': betCodes.NUMBER_LENGTH_IS_INVALID
    }
  }
}

module.exports = BetValidator
