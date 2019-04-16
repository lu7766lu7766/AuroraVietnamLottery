'use strict'

const reportService = App.make('Service/Report')

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
    const date = moment(request.input('date', moment())).format('YYYY-MM-DD')
    if (!await reportService.checkDateNumbers(date))
    {
      await reportService.fetchNumbers(date)
    }
    return await this.settle()
  }

  /**
   * 結算
   */
  async settle() {
    return await reportService.settle()
  }

  /**
   * 投注明細
   */
  async betDetail({auth, request}) {
    return await reportService.betDetail({auth, request})
  }

  /**
   * 投注明細總計
   */
  async betTotal({auth, request}) {
    return await reportService.betTotal({auth, request})
  }

  /**
   * 轉移明細
   */
  async transferDetail({auth, request}) {
    return await reportService.transferDetail({auth, request})
  }

  /**
   * 轉移明細總計
   */
  async transferTotal({auth, request}) {
    return await reportService.transferTotal({auth, request})
  }

  /**
   * 儲值明細
   */
  async storeDetail({auth, request}) {
    return await reportService.storeDetail({auth, request})
  }

  /**
   * 儲值明細總計
   */
  async storeTotal({auth, request}) {
    return await reportService.storeTotal({auth, request})
  }

  /**
   * 取得歷史號碼
   */
  async getHistoryLottery({request}) {
    return await reportService.getHistoryLottery({request})
  }

  /**
   * 取得歷史號碼Total
   */
  async getHistoryLotteryTotal() {
    return await reportService.getHistoryLotteryTotal()
  }
}

module.exports = ReportController
