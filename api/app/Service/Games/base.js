'use strict'

const reportRepo = App.make('Repositories/Report')
const BonusRateConstant = use('Constants/BonusRate')

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
    _.forEach(_.range(1, this.MAX_NUMBERS + 1), i =>
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
    return _.find(BonusRateConstant.enum(), {game_type_id: this.gameTypeID})
  }

  /**
   * init
   */
  constructor(bet) {
    this.betID = bet.id
    this.lottery = bet.lottery
    this.user = bet.user
    this.betNumbers = _.map(bet.numbers, 'number')
    this.betPoint = bet.bet_point
  }

  /**
   * main function
   */
  async settle() {
    const winPoint = this.countWinPoint()
    await this.updateDB(winPoint)
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
    reportRepo.winPoint({
      userID: this.user.id,
      betID: this.betID,
      date: this.lottery.date,
      winPoint
    })
  }
}

module.exports = BaseGame
