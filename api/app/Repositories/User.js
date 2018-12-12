'use strict'
const Hash = use('Hash')

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
    user.role_id = request.input('roleID')
    user.parent_id = request.input('parentID')
      ? request.input('parentID')
      : null

    await user.save()
  }
}

module.exports = UserRepositories
