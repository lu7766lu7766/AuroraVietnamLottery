'use strict'

class UserRepositories
{
  async findUserByID(id) {
    return Model('User').findByOrFail('user_id', id)
  }

  async addUser({request}) {
    const user = Create.model('User')
    user.user_id = request.input('userID')
    user.password = request.input('password')
    user.name = request.input('name')
    user.role_id = request.roleID
      ? request.roleID
      : Constant('Role').GAMER_CODE
    user.point = 0
    user.parent_id = request.parentID
      ? request.parentID
      : null

    await user.save()
  }
}

module.exports = UserRepositories
