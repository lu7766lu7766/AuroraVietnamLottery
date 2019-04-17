'use strict'

const BetModel = use('Models/Bet')
const CommonCodes = use('ApiCodes/Common')

class BetRepository
{
  async bet({user, betPoint, date, gameTypeID, numbers}) {
    // start transaction
    const trx = await DB.beginTransaction()

    try
    {
      user.point = user.point - betPoint
      await user.save(trx)

      // start proccess bet
      const bet = new BetModel()
      bet.lotteries_date = date
      bet.user_id = user.id
      bet.game_type_id = gameTypeID
      bet.bet_point = betPoint

      const createBody = _.reduce(numbers, (res, number) =>
      {
        res.push({number})
        return res
      }, [])

      // bet numbers
      await bet.numbers().createMany(createBody, trx)
      trx.commit()
      return true
    } catch (e)
    {
      trx.rollback()
      throw new ApiErrorException(CommonCodes.CREATE_FAIL)
    }
  }

  async getUnSettleBet() {
    return await DB.table('bets')
      .select('id')
      .where('is_settle', false)
      .whereExists(function ()
      {
        this.table('lotteries').whereRaw('lotteries.date = bets.lotteries_date')
      })
  }

  async getBetData(id) {
    return await BetModel.find(id)
  }
}

module.exports = BetRepository
