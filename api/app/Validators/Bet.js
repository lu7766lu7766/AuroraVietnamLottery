'use strict'

const GameTypeConstant = use('Constants/GameType')
const BetCodes = use('ApiCodes/Bet2000')

class BetValidator
{
  static getSizeString(val) {
    return `min:${val}|max:${val}`
  }

  get rules() {
    const gameTypeRules = GameTypeConstant.rules()
    return {
      'gameTypeID': 'required',
      'betPoint': 'required|integer',
      'numbers': 'required|array|'
        + BetValidator.getSizeString(gameTypeRules[this.ctx.request.input('gameTypeID')].length),
      'numbers.*': 'numberString|'
        + BetValidator.getSizeString(gameTypeRules[this.ctx.request.input('gameTypeID')].strlen)
    }
  }

  get messages() {
    return {
      'gameTypeID.required': BetCodes.GAME_TYPE_IS_REQUIRED,
      'betPoint.required': BetCodes.BET_POINT_IS_REQUIRED,
      'betPoint.number': BetCodes.BET_POINT_TYPE_ERROR,
      'numbers.require': BetCodes.NUMBERS_IS_REQUIRED,
      'numbers.array': BetCodes.NUMBERS_TYPE_ERROR,
      'numbers.min': BetCodes.NUMBERS_QUANTITY_IS_INVALID,
      'numbers.max': BetCodes.NUMBERS_QUANTITY_IS_INVALID,
      'numbers.*.numberString': BetCodes.NUMBER_TYPE_ERROR,
      'numbers.*.min': BetCodes.NUMBER_LENGTH_IS_INVALID,
      'numbers.*.max': BetCodes.NUMBER_LENGTH_IS_INVALID
    }
  }
}

module.exports = BetValidator
