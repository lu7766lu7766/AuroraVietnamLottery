'use strict'

class Bet
{
  async bet({user, betPoint, date, gameTypeID, numbers}) {
    // start transaction
    const trx = await DB.beginTransaction()

    try
    {
      user.point = user.point - betPoint
      await user.save(trx)

      // start proccess bet
      const bet = Create.model('Bet')
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
      throw new ApiErrorException(Codes('Common').CREATE_FAIL)
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
    return await Model('Bet').find(id)
  }
}

module.exports = Bet
