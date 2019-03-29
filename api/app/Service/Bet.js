'use strict'
const userService = Create.service('User')

class Bet
{

  async bet({auth, request}) {
    // check now is valid time
    this.checkBetTime()

    request.betPoint = parseInt(request.input('betPoint'))

    // check user point is enough
    const user = await userService.getUser({auth})
    this.checkPoint(user, request.betPoint)

    // check game type
    request.gameType = await this.checkGameType(request.input('gameTypeID'))

    // get bet date
    request.date = this.getBetDate()

    Create.repository('Bet').bet({
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
      throw new ApiErrorException(Codes('User1000').POINT_CANNOT_LESS_0())
    }
  }

  /**
   * check DB has target game type
   */
  async checkGameType(gameType) {
    try
    {
      // find will no throw exception
      return await Model('GameType').findOrFail(gameType)
    } catch (e)
    {
      throw new ApiErrorException(Codes('Bet2000').GAME_TYPE_NOT_FOUNT)
    }
  }

  /**
   * check bet time is between 19:00~19:15
   * true throw INVALID_TIME
   */
  checkBetTime() {
    const format = 'YYYY-MM-DD'
    const now = moment()
    if (moment(now).isBetween(now.format(`${format} 18:59`), now.format(`${format} 19:16`), 'minute'))
    {
      throw new ApiErrorException(Codes('Bet2000').INVALID_TIME)
    }
  }

  /**
   * check bet date is over 19:15 ?
   * true will add one day
   */
  getBetDate() {
    const format = 'DDMMYYYY'
    const now = moment()
    if (moment(now).isAfter(now.format('YYYY-MM-DD 19:15'), 'minute'))
    {
      return now.add(1, 'day').format(format)
    }
    else
    {
      return now.format(format)
    }
  }
}

module.exports = Bet
