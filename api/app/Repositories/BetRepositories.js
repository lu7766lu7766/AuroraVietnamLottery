'use strict'

class BetRepositories
{
  // todo role id <= 2 才能異動？
  async bet({user, betPoint, date, gameTypeID, numbers}) {
    // start transaction
    const trx = await DB.beginTransaction()

    // subtract user point
    user.point = user.point - betPoint
    await user.save()

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
    await bet.numbers().createMany(createBody)

    // once done commit the transaction
    trx.commit()
  }

  async getUnSettleBet() {
    return await DB.table('bets')
      .select('id')
      .where('is_settle', false)
  }

  async getBetData(id) {
    return await Model('Bet').find(id)
  }
}

module.exports = BetRepositories
