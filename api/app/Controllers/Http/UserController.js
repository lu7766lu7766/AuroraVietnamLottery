'use strict'
const SUCCESS = 0
const USER_OR_PASSWORD_ERROR = 1000
const USER_EXISTS = 1001

const User = use('App/Models/User')

class UserController
{
  /**
   * login api
   */
  async login({request, auth}) {
    //
    const {userID, password} = request.all()
    await auth.logout()
    try
    {
      await auth.remember(true).attempt(userID, password)
    } catch (err)
    {
    }

    var {data: isLogin} = await this.isLogin({auth})
    if (isLogin)
    {
      return {
        code: SUCCESS,
        data: await auth.getUser()
      }
    }
    else
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
  async isLogin({auth}) {
    try
    {
      await auth.check()
      return {
        code: SUCCESS,
        data: true
      }
    } catch (error)
    {
      return {
        code: SUCCESS,
        data: false
      }
    }
  }

  /**
   * do logout api
   */
  async logout({auth}) {
    //
    await auth.logout()
    return {
      code: SUCCESS
    }
  }

  /**
   * add new user
   */
  async register({request}) {
    const {userID, password} = request.all() //request.input('userID', 'password')
    try
    {
      await User.findByOrFail('user_id', userID)
      return {
        code: USER_EXISTS
      }
    } catch (e)
    {
      const user = new User()
      user.user_id = userID
      user.password = password

      await user.save()

      return {
        code: SUCCESS
      }
    }
  }
}

module.exports = UserController
