'use strict'

const ReportCodes = use('ApiCodes/Report3000')

class BetReportValidator
{
  get rules() {
    return {
      isSettle: 'number|in:0,1'
    }
  }

  get messages() {
    return {
      'isSettle.number': ReportCodes.IS_SETTLE_TYPE_ERROR,
      'isSettle.in': ReportCodes.IS_SETTLE_VALUE_ERROR
    }
  }
}

module.exports = BetReportValidator
