'use strict'

class BaseGame
{
  /**
   * there are 27 number in every lottery number
   */
  get MAX_NUMBERS() {return 27}

  /**
   * just take last 2 word of all lottery numbers
   */
  get lotteryLast2Numbers() {
    const allNumbers = []
    _.forEach(_.range(0, this.MAX_NUMBERS + 1), i =>
    {
      allNumbers.push(this.lottery[`number${i}`].substr(-2))
    })
    return allNumbers
  }

  /**
   * special number
   */
  get specialNumber() {
    return this.lottery.number1
  }

  /**
   * need to override
   */
  get gameTypeID() { return 0 }

  /**
   * to count how much point you get
   */
  get bunusRate() {
    return _.find(Constant('BonusRate').enum(), {game_type_id: this.gameTypeID})
  }

  /**
   * init
   */
  constructor(bet) {
    this.betID = bet.id
    this.lottery = bet.lottery
    this.user = bet.user
    this.betNumbers = _.map(bet.numbers, 'number')
    this.betPoint = bet.point
  }

  async settle() {
    const win_point = this.countWinPoint()
    if (win_point > 0) await this.updateDB()
    return true
  }

  /**
   * need to override!!
   */
  countWinPoint() {
    return 0
  }

  /**
   * update db
   */
  async updateDB(winPoint) {
    const trx = await DB.beginTransaction()
    const log = Create.model('SettleLog')
    log.bet_id = this.betID
    log.user_id = this.user.id
    log.win_point = winPoint
    log.date = this.lottery.date
    log.save()
    const user = Model('User').find(this.user.id)
    user.point += winPoint
    trx.commit()
  }
}

module.exports = BaseGame
