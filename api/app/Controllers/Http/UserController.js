'use strict'

const userService = Create.service('User')

class UserController
{
  /**
   * login api
   */
  async login(context) {
    // return make('userService').login(context)
    await Validator('Login').validateAll(context.request.all())
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
    await Validator('Login').validateAll(context.request.all())
    try
    {
      await userService.register(context)
      return await userService.login(context)
    } catch (e)
    {
      throw [Codes.USER_EXISTS, e]
    }
  }

  /**
   * add new user
   */
  async createUser(context) {
    await Validator('Login').validateAll(context.request.all())
    try
    {
      await userService.createUser(context)
      return await userService.login(context)
    } catch (e)
    {
      throw [Codes.USER_EXISTS, e]
    }
  }

  /**
   * change user point
   */
  async changePoint(context) {
    await Validator('UserPoint').validateAll(context.request.all())
    return await userService.changePoint(context)
  }

  /**
   * change user point
   */
  async passPointChanged(context) {
    await Validator('PassPoint').validateAll(context.request.all())
    return await userService.passPointChanged(context)
  }
}

module.exports = UserController
