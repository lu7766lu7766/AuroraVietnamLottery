'use strict'

const userService = Create.service('User')

class UserController
{
  /**
   * login api
   */
  async login(context) {
    // return make('userService').login(context)
    try
    {
      return await userService.login(context)
    } catch (e)
    {
      throw [Codes.USER_OR_PASSWORD_ERROR, false]
    }
  }

  /**
   * check is login or not
   */
  async isLogin(context) {
    try
    {
      return await userService.isLogin(context)
    } catch (e)
    {
      throw [Codes.SUCCESS, false]
    }
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
    try
    {
      await userService.register(context)
      return await context.auth.attempt(userID, password)
    } catch (e)
    {
      throw [Codes.USER_EXISTS, {}]
    }
  }
}

module.exports = UserController
