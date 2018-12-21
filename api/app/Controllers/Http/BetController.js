'use strict'

const betService = Create.service('Bet')
const reportService = Create.service('Report')

class BetController
{
  async index(context) {
    Validator('Bet').validateAll(context.request.all())
    return await betService.bet(context)
  }

  /**
   * check new lottery numbers
   * get bet result
   * @returns {Promise<void>}
   */
  async settle({request}) {
    // check has new numbers?
    const date = request.input('date', moment().format('DDMMYYYY'))
    if (!await reportService.checkTodayNumbers(date))
    {
      await reportService.fetchNumbers(date)
    }
    reportService.settle()
  }
}

module.exports = BetController
