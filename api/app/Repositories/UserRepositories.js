'use strict'

class UserRepositories
{
  async findUserByID(id) {
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
}

module.exports = UserRepositories
