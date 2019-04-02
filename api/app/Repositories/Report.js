'use strict'

const LotteryModel = use('Models/Lottery')
const BetModel = use('Models/Bet')
const UserModel = use('Models/User')
const PointLogModel = use('Models/PointLog')
const PointLogTypeConstant = use('Constants/PointLogType')

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
  getCommonBetQuery(userID, isSettle) {
    return BetModel.query().where('user_id', userID).where('is_settle', isSettle)
  }

  async getBetDetail(userID, page, perPage, isSettle) {
    return await this.getCommonBetQuery(userID, isSettle)
      .select('lotteries_date', 'game_type_id', 'bet_point', 'win_point', 'created_at')
      .offset((page - 1) * perPage)
      .limit(perPage)
      .orderBy('id', 'desc')
      .fetch()
  }

  async getBetTotal(userID, isSettle) {
    return _.head(await this.getCommonBetQuery(userID, isSettle).count('* as total'))
  }

  // transfer detail
  getCommonPointLogQuery(userID, type, identity = null) {
    let query = PointLogModel.query()
      .where('type_id', PointLogTypeConstant.enum()[type])
    if (!_.isNull(identity))
    {
      if (identity === PointLogTypeConstant.SELLER_CODE)
      {
        // 轉出者
        query.where('source_user_id', userID)
      }
      else if (identity === PointLogTypeConstant.BUYER_CODE)
      {
        // 轉入者
        query.where('target_user_id', userID)
      }
    }
    else
    {
      // 儲值
      query.where('target_user_id', userID)
    }
    return query
  }

  async getTransferDetail(userID, page, perPage, identity) {
    return await this.getCommonPointLogQuery(userID, PointLogTypeConstant.TRANSFER_CODE, identity)
      .with('source_user')
      .with('target_user')
      .offset((page - 1) * perPage)
      .limit(perPage)
      .fetch()
  }

  async getTransferTotal(userID, identity) {
    return _.head(await this.getCommonPointLogQuery(userID, PointLogTypeConstant.TRANSFER_CODE, identity)
      .count('* as total'))
  }

  // store detail
  async getStoreDetail(userID, page, perPage) {
    return await this.getCommonPointLogQuery(userID, PointLogTypeConstant.ADD_CODE)
      .with('source_user')
      .with('target_user')
      .offset((page - 1) * perPage)
      .limit(perPage)
      .fetch()
  }

  async getStoreTotal(userID) {
    return _.head(await this.getCommonPointLogQuery(userID, PointLogTypeConstant.ADD_CODE)
      .where('type_id', PointLogTypeConstant.ADD_CODE)
      .count('* as total'))
  }
}

module.exports = Report
