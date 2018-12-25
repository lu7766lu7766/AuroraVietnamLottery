'use strict'

class UserRepositories
{
  async findUserByUserID(id) {
    return Model('User').findByOrFail('user_id', id)
  }

  async addUser({userID, password, name, roleID, parentID}) {
    const user = Create.model('User')
    user.user_id = userID
    user.password = password
    user.name = name
    user.role_id = roleID
    user.point = 0
    user.parent_id = parentID
    await user.save()
  }

  /**
   * 新增點數異動紀錄
   * todo 看是否提領無需審核
   */
  async createChangePointLog(creator_id, user_id, point) {
    const log = Create.model('ChangeLog')
    log.creator_id = creator_id
    log.user_id = user_id
    log.point = point
    await log.save()
  }

  /**
   * 審核點數異動
   */
  async passPoint(id) {
    const trx = await DB.beginTransaction()
    const log = await Model('PointLog').find(id)
    const user = await Model('User').find(log.user_id)
    const newPoint = log.point + user.point
    if (newPoint < 0)
    {
      throw [Codes.POINT_CANNOT_LESS_0, false]
    }
    log.is_pass = true
    await log.save()
    user.point = newPoint
    await user.save()
    trx.commit()
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

module.exports = UserRepositories
