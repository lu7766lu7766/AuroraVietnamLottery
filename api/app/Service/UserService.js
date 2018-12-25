'use strict'

const userRepo = Create.repository('User')

class UserService
{
  /**
   * login api
   */
  async login({request, auth}) {
    //
    const {userID, password} = request.all()
    const tokenData = await auth.attempt(userID, password)
    const user = await userRepo.findUserByUserID(userID)
    // 新登入需刪棄用的token // 若是需要多處登入，則移除這行
    if (userID == 'lu7766')
    {
      tokenData.data = `${tokenData.type} ${tokenData.token}`
    }

    await userRepo.deleteOldTokensByUser(user)

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
    await userRepo.addUser({
      userID: request.input('userID'),
      password: request.input('password'),
      name: request.input('name'),
      roleID: Constant('Role').GAMER_CODE,
      parentID: null
    })
  }

  /**
   * api for create a new user(has parent)
   */
  async createUser({request, auth}) {
    // auth middleware
    const user = await this.getUser({auth})
    request.roleID = (user.role_id + 1) >= Constant('Role').GAMER_CODE
      ? Constant('Role').GAMER_CODE
      : (user.role_id + 1)
    request.parentID = user.id
    await userRepo.addUser({
      userID: request.input('userID'),
      password: request.input('password'),
      name: request.input('name'),
      roleID: request.roleID,
      parentID: request.parentID
    })
  }

  /**
   * api for change a user's point
   * todo 看是否提領無需審核
   */
  async changePoint({request, auth}) {
    // auth middleware
    const createUser = await this.getUser({auth})
    const user = await userRepo.findUserByUserID(request.input('userID'))
    if (createUser.id == user.id && createUser.id != 1)
    {
      throw [
        Codes.CONNOT_ADD_POINT_YOURSELF,
        'can not add poing by yourself'
      ]
    }
    await userRepo.createChangePointLog(createUser.id, user.id, changPoint)
  }

  /**
   * 審核點數異動
   */
  async passPointChanged(context) {
    await userRepo.passPoint(context.request.input('id'))
  }
}

module
  .exports = UserService
