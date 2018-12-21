'use strict'

const aRequest = require('async-request')
const cheerio = require('cheerio')

const reportRepo = Create.repository('Report')
const betRepo = Create.repository('Bet')

class ReportService
{
  get source1() { return 'https://xosodaiphat.com/xsmb-xo-so-mien-bac.html' }

  // get source2() { return 'http://xskt.com.vn/xsm' }

  get format() { return 'YYYY-MM-DD HH:mm:ss' }

  async checkTodayNumbers(date) {
    const res = await reportRepo.getTargetDateNumbers(date)
    return !!res.length
  }

  async fetchNumbers(date) {
    // await new Promise.all([this.getNumbersBySource1, this.getNumberBySource2])
    try
    {
      const sqlBody = await this.getNumbersBySource1(date)
      sqlBody.created_at = sqlBody.updated_at = moment().format(this.format)
      sqlBody.date = date
      await reportRepo.addRowBySql(sqlBody)
      return true
    } catch (e)
    {
      return false
    }
  }

  async getNumbersBySource1(date) {
    const response = await aRequest(this.source1)
    const $ = cheerio.load(response.body)
    const sqlBody = {}
    const $trs = $(`#kqngay_${date} table tr`)
    $trs.not($trs.first()).find('span').each(function (i)
    {
      sqlBody['number' + (i + 1)] = $(this).text()
    })
    if (Object.keys(sqlBody).length < 27)
    {
      throw Codes.CANNOT_TAKE_LOTTERY_NUMBERS
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
      // console.log(bet)

      bet = bet.toJSON()

      const GameProccesor = new (Factory('Games'))(bet.game_type.id)
      const gameProccesor = new GameProccesor(bet)
      gameProccesor.settle()

      // throw gameProccesor
    }
  }
}

module.exports = ReportService
