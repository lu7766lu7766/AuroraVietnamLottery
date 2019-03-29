'use strict'

class BetReportValidator
{
  rules() {
    return {
      isSettle: 'sometimes|number|in:0,1'
    }
  }

  get messages() {
    return {
      'isSettle.number': Codes('Report3000').IS_SETTLE_TYPE_ERROR,
      'isSettle.in': Codes('Report3000').IS_SETTLE_VALUE_ERROR
    }
  }
}

module.exports = BetReportValidator
