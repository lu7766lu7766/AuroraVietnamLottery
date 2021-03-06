'use strict'
const userService = App.make('Service/User')
const betRepo = App.make('Repositories/Bet')
const UserCodes = use('ApiCodes/User1000')
const BetCodes = use('ApiCodes/Bet2000')
const GameTypeModel = use('Models/GameType')

class BetService
{
  constructor() {
    this.stopBetStartTime = '19:09:59'
    this.stopBetEndTime = '19:31:00'
    this.dateFormat = 'YYYY-MM-DD'
  }

  async bet({auth, request}) {
    // check now is valid time
    this.checkBetTime()

    request.betPoint = +request.input('betPoint')

    // check user point is enough
    const user = await userService.getUser({auth})
    this.checkPoint(user, request.betPoint)

    // check game type
    request.gameType = await this.checkGameType(request.input('gameTypeID'))

    // get bet date
    request.date = this.getBetDate()
    await betRepo.bet({
      user,
      betPoint: request.betPoint,
      date: request.date,
      gameTypeID: request.gameType.id,
      numbers: request.input('numbers')
    })

    return true
  }

  /**
   * check user point is enough
   */
  checkPoint(user, point) {
    if (user.point < point)
    {
      throw new ApiErrorException(UserCodes.POINT_CANNOT_LESS_0())
    }
  }

  /**
   * check DB has target game type
   */
  async checkGameType(gameType) {
    try
    {
      // find will no throw exception
      return await GameTypeModel.findOrFail(gameType)
    } catch (e)
    {
      throw new ApiErrorException(BetCodes.GAME_TYPE_NOT_FOUNT)
    }
  }

  /**
   * between not contain equal so need more(less) 1 second
   * check bet time is between 19:10~19:30
   * true throw INVALID_TIME
   */
  checkBetTime() {
    const now = moment()
    if (now.isBetween(
      now.format(`${this.dateFormat} ${this.stopBetStartTime}`), now.format(`${this.dateFormat} ${this.stopBetEndTime}`
      ), 'second'))
    {
      throw new ApiErrorException(BetCodes.INVALID_TIME)
    }
  }

  /**
   * after not contain equal so need more(less) 1 second
   * check bet date is over 19:10 ?
   * true will add one day
   */
  getBetDate() {
    const now = moment()
    if (now.isAfter(now.format(`${this.dateFormat} ${this.stopBetStartTime}`), 'second'))
    {
      return now.add(1, 'day').format(this.dateFormat)
    }
    else
    {
      return now.format(this.dateFormat)
    }
  }
}

module.exports = BetService
