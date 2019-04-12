'use strict'

const UserModel = use('Models/User')
const PointLogTypeConstant = use('Constants/PointLogType')
const CommonCodes = use('ApiCodes/Common')

class User
{
  async findUserByUserName(userName) {
    return UserModel.findByOrFail('user_name', userName)
  }

  async addUser({userName, password, nickName, roleID, parentID}) {
    const user = new UserModel()
    user.user_name = userName
    user.password = password
    user.nick_name = nickName
    user.role_id = roleID
    user.point = 0
    user.parent_id = parentID
    await user.save()
  }

  async updateMyself({id, password, nickName}) {
    const user = await UserModel.find(id)
    if (password)
    {
      user.password = password
    }
    user.nick_name = nickName
    return await user.save()
  }

  /**
   * 新增點數異動紀錄
   */
  async transferPoint(sourceUser, targetUser, point) {
    const newSourcePoint = +sourceUser.point - point
    const newTargetPoint = +targetUser.point + point
    const trx = await DB.beginTransaction()
    try
    {
      const now = moment().format('YYYY-MM-DD HH:mm:ss')
      await trx.table('users').update({point: newSourcePoint, updated_at: now}).where('id', sourceUser.id)
      await trx.table('users').update({point: newTargetPoint, updated_at: now}).where('id', targetUser.id)
      await trx.table('point_logs').insert({
        source_user_id: sourceUser.id,
        target_user_id: targetUser.id,
        point,
        type_id: PointLogTypeConstant.TRANSFER_CODE,
        created_at: now,
        updated_at: now
      })
      trx.commit()
    } catch (e)
    {
      trx.rollback()
      throw new ApiErrorException(CommonCodes.UPDATE_FAIL, e)
    }
  }

  /**
   * 新增點數異動紀錄
   */
  async addPoint(sourceUser, targetUser, point) {
    const trx = await DB.beginTransaction()
    const newTargetPoint = +targetUser.point + point
    try
    {
      const now = moment().format('YYYY-MM-DD HH:mm:ss')
      await trx.table('users').update({point: newTargetPoint, updated_at: now}).where('id', targetUser.id)
      await trx.table('point_logs').insert({
        source_user_id: sourceUser.id,
        target_user_id: targetUser.id,
        point,
        type_id: PointLogTypeConstant.ADD_CODE,
        created_at: now,
        updated_at: now
      })
      trx.commit()
    } catch (e)
    {
      trx.rollback()
      throw new ApiErrorException(CommonCodes.UPDATE_FAIL, e)
    }
  }

  /**
   * delete older access token
   * it will cause could not login with multi device
   */
  async deleteOldTokensByUser(user) {
    const lastToken = await DB.table('tokens').where('user_id', user.id).select('id').last()
    await DB.table('tokens').where('user_id', user.id).whereNot('id', lastToken.id).update('is_revoked', 1)
    // .delete() // 不刪除可作登入記錄之留存
  }
}

module.exports = User
