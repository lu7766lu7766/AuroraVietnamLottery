'use strict'

class BetRepositories
{
  // todo role id <= 2 才能異動？
  // todo repo是否要把變數做得完整一點，不要在裡面做判斷
  async bet({user, request}) {
    // start transaction
    const trx = await DB.beginTransaction()

    // subtract user point
    user.point = user.point - request.betPoint
    await user.save()

    // start proccess bet
    const bet = Create.model('Bet')
    bet.lotteries_date = request.date
    bet.user_id = user.id
    bet.game_type_id = request.gameType.id
    bet.point = request.betPoint
    const createBody = _.reduce(request.input('numbers'), (res, number) =>
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
}

module.exports = BetRepositories
