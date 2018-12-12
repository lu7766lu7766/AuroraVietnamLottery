'use strict'
const SUCCESS = 0
const USER_OR_PASSWORD_ERROR = 1000
const USER_EXISTS = 1001
const INVALID_API_TOKEN = 1002

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
      return {
        code: SUCCESS,
        data: await userService.login(context)
      }
    } catch (e)
    {
      return {
        code: USER_OR_PASSWORD_ERROR,
        data: {}
      }
    }
  }

  /**
   * check is login or not
   */
  async isLogin(context) {
    try
    {
      return {
        code: SUCCESS,
        data: await userService.isLogin(context)
      }
    } catch (e)
    {
      return {
        code: SUCCESS,
        data: false
      }
    }
  }

  /**
   * get user detail
   */
  async getUser(context) {
    try
    {
      return {
        code: SUCCESS,
        data: await userService.getUser(context)
      }
    } catch (e)
    {
      return {
        code: INVALID_API_TOKEN,
        data: {}
      }
    }
  }

  /**
   * add new user
   */
  async register(context) {
    try
    {
      await userService.register(context)
      return {
        code: SUCCESS,
        data: await context.auth.attempt(userID, password)
      }
    } catch (e)
    {
      return {
        code: USER_EXISTS,
        data: {}
      }
    }
  }
}

module.exports = UserController
