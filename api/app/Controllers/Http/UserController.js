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

  // backend user maintain
  /**
   * get user list
   */
  async userList(context) {
    return await userService.userList(context)
  }

  /**
   * get user list total
   */
  async userListTotal(context) {
    return await userService.userListTotal(context)
  }

  /**
   * user add for supplier
   */
  async userAddForSupplier(context) {
    await userService.userAdd(context)
    return true
  }

  /**
   * user add
   */
  async userAdd(context) {
    await userService.userAdd(context)
    return true
  }

  /**
   * update user
   */
  async updateMyself(context) {
    return await userService.updateMyself(context)
  }

  /**
   * user update
   */
  async userUpdate(context) {
    await userService.userUpdate(context)
    return true
  }

  /**
   * delete user
   */
  async userDelete(context) {
    await userService.userDelete(context)
    return true
  }
}

module.exports = UserController
