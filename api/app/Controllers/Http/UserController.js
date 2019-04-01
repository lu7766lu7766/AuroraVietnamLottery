'use strict'

const userService = App.make('Service/User')

class UserController
{
  /**
   * login api
   */
  async login(context) {
    return await userService.login(context)
  }

  /**
   * check is login or not
   */
  async isLogin(context) {
    return await userService.isLogin(context)
  }

  /**
   * get user detail
   */
  async getUser(context) {
    return await userService.getUser(context)
  }

  /**
   * add new user
   */
  async register(context) {
    await userService.register(context)
    return await userService.login(context)
  }

  /**
   * add new user
   */
  async createUser(context) {
    await userService.createUser(context)
    return await userService.login(context)
  }

  /**
   * transfer user point 傳送者會扣點
   */
  async transferPoint(context) {
    await userService.transferPoint(context)
    return true
  }

  /**
   * add point 不扣點
   */
  async addPoint(context) {
    await userService.addPoint(context)
    return true
  }
}

module.exports = UserController
