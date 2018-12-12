'use strict'

const userRepository = Create.repository('User')

class User
{
  /**
   * login api
   */
  async login({request, auth}) {
    //
    const {userID, password} = request.all()

    const tokenData = await auth.attempt(userID, password)
    const user = await userRepository.findUserByID(userID)
    // 新登入需刪棄用的token // 若是需要多處登入，則移除這行
    await this.deleteOldTokensByUser(user)

    return tokenData
  }

  /**
   * check is login or not
   */
  async isLogin({auth}) {
    return await auth.check()
  }

  /**
   * get user detail by auth
   */
  async getUser({auth}) {
    return await auth.getUser()
  }

  /**
   * add new user
   */
  async register({request}) {
    await userRepository.addUser({request})
  }

  async deleteOldTokensByUser(user) {
    const lastToken = await DB.table('tokens').where('user_id', user.id).select('id').last()
    await DB.table('tokens').whereNot('id', lastToken.id).update('is_revoked', 1)
    // .delete() // 不刪除可作登入記錄之留存
  }
}

module
  .exports = User
