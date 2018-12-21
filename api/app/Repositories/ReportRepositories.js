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
    const bet = await Model('Bet').find(betID)
    if (winPoint > 0)
    {
      bet.win_point = winPoint
      const user = await Model('User').find(userID)
      user.point += +winPoint
      await user.save()
    }
    bet.is_settle = true
    await bet.save()
    trx.commit()
  }
}

module.exports = ReportRepositories
