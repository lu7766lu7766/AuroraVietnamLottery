'use strict'
const Bet = use('App/Models/Bet')
const Logger = use('Logger')

class Bet
{
  async test() {
    // let bet = await Bet.query().with('user', builder =>
    // {
    //   builder.select('user_id')
    // }).with('game_type', builder =>
    // {
    //   // builder.select('name')
    // }).with('numbers', builder =>
    // {
    //   // builder.select('number')
    // }).fetch()
    let bet = await Bet.find(1)
    await bet.loadMany({
      user: builder => builder.select('user_id'),
      // game_type: builder => builder.select('name'),
      numbers: builder => builder.select('number'),
      'game_type.bonus_rate': null // builder => builder.select('match_count', 'rate')
    })
    // await bet.loadMany(['user', 'game_type', 'numbers'])
    return bet
  }
}

module.exports = Bet
