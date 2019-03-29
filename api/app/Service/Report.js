'use strict'

const aRequest = require('async-request')
const cheerio = require('cheerio')

const reportRepo = Create.repository('Report')
const betRepo = Create.repository('Bet')

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
        throw new ApiErrorException(Codes('Report3000').CANNOT_TAKE_LOTTERY_NUMBERS, [e1, e2].join('; '))
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
      // const bet = await Model('Bet').query().with('user').with('numbers').where('id', x.id).fetch()
      let bet = await betRepo.getBetData(x.id)
      await bet.loadMany({
        lottery: null,
        user: null,
        game_type: null,
        numbers: builder => builder.select('number')
      })

      bet = bet.toJSON()

      const GameProccesor = new (Factory('Games'))(bet.game_type.id)
      const gameProccesor = new GameProccesor(bet)
      gameProccesor.settle()
    }
    return true
  }

  async getUser({auth}) {
    return await Create.service('User').getUser({auth})
  }

  /**
   * 投注明細
   */
  async betDetail({auth, request}) {
    const user = await this.getUser({auth})
    return reportRepo.getBetDetail(user.id, request.input('page'), request.input('perPage'), request.input('isSettle'))
  }

  /**
   * 投注明細總計
   */
  async betTotal({auth, request}) {
    const user = await this.getUser({auth})
    return reportRepo.getBetTotal(user.id, request.input('isSettle'))
  }

  /**
   * 儲值, 提領明細
   */
  async storeDetail({auth, request}) {
    const user = await this.getUser({auth})
    return await reportRepo.getStoreDetail(user.id, request.input('page'), request.input('perPage'), request.input('status'))
  }

  /**
   * 儲值, 提領明細總計
   */
  async storeTotal({auth, request}) {
    const user = await this.getUser({auth})
    return await reportRepo.getStoreTotal(user.id, request.input('status'))
  }
}

module.exports = Report
