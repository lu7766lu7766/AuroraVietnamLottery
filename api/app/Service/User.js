'use strict'

const userRepo = App.make('Repositories/User')
const RoleConstant = use('Constants/Role')
const UserCodes = use('ApiCodes/User1000')
const UserModel = use('Models/User')

class User
{
  /**
   * login api
   */
  async login({request, auth}) {
    //
    const {userName, password} = request.all()
    const tokenData = await auth.attempt(userName, password)
    const user = await userRepo.findUserByUserName(userName)

    tokenData.data = `${tokenData.type} ${tokenData.token}`

    // 新登入需刪棄用舊的token // 若是需要多處登入，則移除這行
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
   * add new gamer user
   */
  async register({request}) {
    await userRepo.addUser({
      userName: request.input('userName'),
      password: request.input('password'),
      nickName: request.input('nickName'),
      roleID: RoleConstant.GAMER_CODE,
      parentID: null
    })
  }

  /**
   * comon for transfer(add) point
   */
  async getSourceTargetUsers({request, auth}) {
    // auth middleware
    const sourceUser = await this.getUser({auth})
    let targetUser
    try
    {
      targetUser = await userRepo.findUserByUserName(request.input('userName'))
    } catch (e)
    {
      throw new ApiErrorException(UserCodes.USER_NOT_FOUND)
    }

    return {
      sourceUser, targetUser
    }
  }

  /**
   * api for transfer users point
   */
  async transferPoint({request, auth}) {
    // auth middleware
    const {sourceUser, targetUser} = await this.getSourceTargetUsers({request, auth})
    if (sourceUser.id === targetUser.id)
    {
      throw new ApiErrorException(UserCodes.CANNOT_TRANSFER_TO_YOURSELF)
    }
    const point = +request.input('point')
    if (+sourceUser.point - point < 0)
    {
      throw new ApiErrorException(UserCodes.POINT_CANNOT_LESS_0)
    }
    await userRepo.transferPoint(sourceUser, targetUser, point)
  }

  /**
   * api for add point
   */
  async addPoint({request, auth}) {
    // auth middleware
    const {sourceUser, targetUser} = await this.getSourceTargetUsers({request, auth})

    await userRepo.addPoint(sourceUser, targetUser, +request.input('point'))
  }

  // backend user maintain
  /**
   * api get user list
   */
  async userList({request}) {
    await userRepo.getUserList(request.input('page', 1), request.input('perPage', 20))
  }

  /**
   * api get user total
   */
  async userListTotal() {
    await userRepo.getUserListTotal()
  }

  /**
   * api for create a new user(has parent)
   */
  async userAdd({request, auth}) {
    // auth middleware
    const user = await this.getUser({auth})

    // 管理者才有權限決定新用戶權限，沒給就是新增者的下個等級
    const roleID = user.role_id == RoleConstant.ADMIN_CODE
      ? request.input('roleID', RoleConstant.SUPPLIER_CODE)
      : RoleConstant.GAMER_CODE

    const parentID = user.id

    await userRepo.userAdd({
      userName: request.input('userName'),
      password: request.input('password'),
      nickName: request.input('nickName', request.input('userName')),
      roleID: roleID,
      parentID: parentID
    })
  }

  /**
   * api for update user
   */
  async updateMyself({request, auth}) {
    const user = await this.getUser({auth})
    return await userRepo.updateMyself({
      id: user.id,
      password: request.input('password'),
      nickName: request.input('nickName')
    })
  }

  /**
   * api user update
   */
  async userUpdate({request}) {
    const user = await UserModel.find(request.input('userID'))
    const roleID = request.input('roleID')
    if (['root', 'lu7766'].indexOf(user.userName) && roleID != RoleConstant.ADMIN_CODE)
    {
      throw new ApiErrorException(UserCodes.ADMIN_CANNOT_CHANGE_ROLE)
    }
    await userRepo.doUserUpdate(user, {
      password: request.input('password'),
      nickName: request.input('nickName'),
      roleID: request.input('roleID')
    })
  }

  /**
   * api user delete
   */
  async userDelete({request}) {
    await userRepo.doUserDelete({
      userID: request.input('userID')
    })
  }
}

module.exports = User
