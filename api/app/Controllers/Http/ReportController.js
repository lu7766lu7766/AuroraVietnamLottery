'use strict'

const reportService = Create.service('Report')

class BetController
{
  /**
   * check new lottery numbers
   * get bet result
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

  async settle() {
    reportService.settle()
  }

  async result({request}) {

  }
}

module.exports = BetController
