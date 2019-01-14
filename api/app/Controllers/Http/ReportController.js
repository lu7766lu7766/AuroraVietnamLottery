'use strict'

const reportService = Create.service('Report')

class ReportController
{
  /**
   * check new lottery numbers
   * get bet result
   * example. http://127.0.0.1:3333/fetch?date=12012019
   * @returns {Promise<void>}
   */
  async fetch({request}) {
    // check has new numbers?
    const date = request.input('date', moment().format('DDMMYYYY'))
    if (!await reportService.checkTodayNumbers(date))
    {
      await reportService.fetchNumbers(date)
    }
    this.settle()
  }

  /**
   * 結算
   */
  async settle() {
    return reportService.settle()
  }

  /**
   * 投注明細
   */
  async betDetail({auth, request}) {
    await Validator('Page').validateAll(request.all())
    await Validator('BetReport').validateAll(request.all())
    return reportService.betDetail({auth, request})
  }

  /**
   * 投注明細總計
   */
  async betTotal({auth, request}) {
    await Validator('BetReport').validateAll(request.all())
    return reportService.betTotal({auth, request})
  }

  /**
   * 儲值, 提領明細
   */
  async storeDetail({auth, request}) {
    await Validator('Page').validateAll(request.all())
    await Validator('Store').validateAll(request.all())
    return reportService.storeDetail({auth, request})
  }

  /**
   * 儲值, 提領明細總計
   */
  async storeTotal({auth, request}) {
    await Validator('Store').validateAll(request.all())
    return reportService.storeTotal({auth, request})
  }
}

module.exports = ReportController
