'use strict'

const ReportCodes = use('ApiCodes/Report3000')
const PointLogTypeConstant = use('Constants/PointLogType')

class BetReportValidator
{
  get rules() {
    return {
      identity: 'required|number|in:' + `${PointLogTypeConstant.SELLER_CODE},${PointLogTypeConstant.BUYER_CODE}`
    }
  }

  get messages() {
    return {
      'identity.required': ReportCodes.IDENTITY_IS_REQUIRED,
      'identity.number': ReportCodes.IDENTITY_TYPE_ERROR,
      'identity.in': ReportCodes.IDENTITY_VALUE_ERROR
    }
  }
}

module.exports = BetReportValidator
