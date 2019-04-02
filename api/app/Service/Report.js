'use strict'

const aRequest = require('async-request')
const cheerio = require('cheerio')

const userService = App.make('Service/User')
const reportRepo = App.make('Repositories/Report')
const betRepo = App.make('Repositories/Bet')
const ReportCodes = use('ApiCodes/Report3000')
const GamesFactory = use('Factories/Games')

// const PointLogTypeConstant = use('Constants/PointLogType')

class Report
{
  get source1() { return 'https://xosodaiphat.com/xsmb-xo-so-mien-bac.html' }

  get source2() { return 'http://xskt.com.vn/xsmb' }

  get format() { return 'YYYY-MM-DD HH:mm:ss' }

  async checkTodayNumbers(date) {
    const res = await reportRepo.getTargetDateNumbers(date)
    return !!res.length
  }

  async fetchNumbers(date, times = 1) {
    // await new Promise.all([this.getNumbersBySource1, this.getNumberBySource2])
    try
    {
      const sqlBody = await this.getNumbersBySource1(date)
      sqlBody.created_at = sqlBody.updated_at = moment().format(this.format)
      sqlBody.date = date
      await reportRepo.addRowBySql(sqlBody)
    } catch (e1)
    {
      Log.error(e1)
      try
      {
        const sqlBody = await this.getNumbersBySource2(date)
        sqlBody.created_at = sqlBody.updated_at = moment().format(this.format)
        sqlBody.date = date
        await reportRepo.addRowBySql(sqlBody)
      } catch (e2)
      {
        Log.error(e2)
        throw new ApiErrorException(ReportCodes.CANNOT_TAKE_LOTTERY_NUMBERS, [e1, e2].join('; '))
      }
    }
  }

  async getNumbersBySource1(date) {
    const response = await aRequest(this.source1)
    const $ = cheerio.load(response.body)
    const sqlBody = {}
    const m_id = moment(date).format('DDMMYYYY')
    const $trs = $(`#kqngay_${m_id} table tr`)
    $trs.not($trs.first()).find('span').each(function (i)
    {
      sqlBody['number' + (i + 1)] = $(this).text()
    })
    if (Object.keys(sqlBody).length < 27)
    {
      throw `crawler source1 error! length: ${_.keys(sqlBody).length}; content: ` + JSON.stringify(sqlBody)
    }
    return sqlBody
  }

  async getNumbersBySource2(date) {
    const response = await aRequest(this.source2)
    const $ = cheerio.load(response.body)
    const sqlBody = {}
    const m_id = moment(date).format('DD-MM')
    const $trs = $(`#MBngay${m_id}`).parent().find(`.box-table table tr`)
    let numKey = 1
    $trs.not($trs.first()).find('em, p').each(function (i)
    {
      $(this).html().replace('<br>', ' ').split(' ').forEach(num =>
      {
        sqlBody['number' + (numKey++)] = num
      })
    })
    if (Object.keys(sqlBody).length < 27)
    {
      throw `crawler source2 error! length: ${_.keys(sqlBody).length}; content: ` + JSON.stringify(sqlBody)
    }
    return sqlBody
  }

  // async getNumberBySource2() {
  //   // const response = await request(this.source2)
  // }

  /**
   * get bets is_settle == 0 bet row
   */
  async settle() {
    const bets = await betRepo.getUnSettleBet()
    for (let x of bets)
    {
      let bet = await betRepo.getBetData(x.id)
      await bet.loadMany({
        lottery: null,
        user: null,
        game_type: null,
        numbers: builder => builder.select('number')
      })

      bet = bet.toJSON()

      const GameProccesor = new GamesFactory(bet.game_type.id)
      const gameProccesor = new GameProccesor(bet)
      gameProccesor.settle()
    }
    return true
  }

  /**
   * 投注明細
   */
  async betDetail({auth, request}) {
    const user = await userService.getUser({auth})
    return reportRepo.getBetDetail(user.id, request.input('page', 1), request.input('perPage', 20), +request.input('isSettle'))
  }

  /**
   * 投注明細總計
   */
  async betTotal({auth, request}) {
    const user = await userService.getUser({auth})
    return reportRepo.getBetTotal(user.id, +request.input('isSettle'))
  }

  /**
   * 轉移明細
   */
  async transferDetail({auth, request}) {
    const user = await userService.getUser({auth})
    return await reportRepo.getTransferDetail(user.id, request.input('page', 1), request.input('perPage', 20), +request.input('identity'))
  }

  /**
   * 轉移明細總計
   */
  async transferTotal({auth, request}) {
    const user = await userService.getUser({auth})
    return await reportRepo.getTransferTotal(user.id, +request.input('identity'))
  }

  /**
   * 儲值明細
   */
  async storeDetail({auth, request}) {
    const user = await userService.getUser({auth})
    return await reportRepo.getStoreDetail(user.id, request.input('page', 1), request.input('perPage', 20))
  }

  /**
   * 儲值明細總計
   */
  async storeTotal({auth}) {
    const user = await userService.getUser({auth})
    return await reportRepo.getStoreTotal(user.id)
  }
}

module.exports = Report
