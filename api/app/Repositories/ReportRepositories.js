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

  // bet detail
  getBetQueryBySettle(isSettle) {
    const query = Model('Bet').query()
    if (typeof isSettle == 'string') query.where('is_settle', isSettle)
    return query
  }

  async getBetDetail(userID, page = 1, perPage = 20, isSettle = null) {
    return await this.getBetQueryBySettle(isSettle)
      .where('user_id', userID)
      .offset((page - 1) * perPage)
      .limit(perPage)
      .fetch()
  }

  async getBetTotal(userID, isSettle = null) {
    return await this.getBetQueryBySettle(isSettle).where('user_id', userID).count('* as total')
  }

  // store detail
  getStoreQueryByStatus(status) {
    const query = Model('PointLog').query()
    if (typeof status == 'string')
    {
      query.where('point',
        status > 0
          ? '>'
          : '<',
        0)
    }
    return query
  }

  async getStoreDetail(userID, page = 1, perPage = 20, status = null) {
    return await this.getStoreQueryByStatus(status)
      .with('creator', query => query.select('id', 'user_id', 'name'))
      .with('user', query => query.select('id', 'user_id', 'name'))
      .where('user_id', userID)
      .offset((page - 1) * perPage)
      .limit(perPage)
      .fetch()
  }

  async getStoreTotal(userID, status = null) {
    return await this.getStoreQueryByStatus(status).where('user_id', userID).count('* as total')
  }
}

module.exports = ReportRepositories
