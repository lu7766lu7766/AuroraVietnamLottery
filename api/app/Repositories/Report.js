'use strict'

const LotteryModel = use('Models/Lottery')
const BetModel = use('Models/Bet')
const UserModel = use('Models/User')
const PointLogModel = use('Models/PointLog')

class Report
{
  async getTargetDateNumbers(date) {
    return await DB.table('lotteries')
      .select('date')
      .where('date', date)
  }

  async addRowBySql(sqlBody) {
    await LotteryModel.create(sqlBody)
  }

  async winPoint({userID, betID, date, winPoint}) {
    const trx = await DB.beginTransaction()
    const bet = await BetModel.find(betID)
    if (winPoint > 0)
    {
      bet.win_point = winPoint
      const user = await UserModel.find(userID)
      user.point += +winPoint
      await user.save()
    }
    bet.is_settle = true
    await bet.save()
    trx.commit()
  }

  // bet detail
  getBetQueryBySettle(isSettle) {
    const query = BetModel.query()
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
    const query = PointLogModel.query()
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

module.exports = Report
