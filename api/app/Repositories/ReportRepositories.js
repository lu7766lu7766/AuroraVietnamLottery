'use strict'

class ReportRepositories
{
  async getTargetDateNumbers(date) {
    return await DB.table('lotteries')
      .select('date')
      .where('date', date)
  }

  async addRowBySql(sqlBody) {
    await Model('Lottery').create(sqlBody)
  }

  async winPoint({userID, betID, date, winPoint}) {
    const trx = await DB.beginTransaction()
    if (winPoint > 0)
    {
      const log = Create.model('SettleLog')
      log.bet_id = betID
      log.user_id = userID
      log.win_point = winPoint
      log.date = date
      log.save()
      const user = await Model('User').find(userID)
      user.point += +winPoint
      user.save()
    }
    const bet = await Model('Bet').find(betID)
    bet.is_settle = true
    bet.save()
    trx.commit()
  }
}

module.exports = ReportRepositories
