'use strict'
const UserCodes = use('ApiCodes/User1000')

class UserValidator
{
  get rules() {
    return {
      password: 'sometimes|string',
      nickName: 'sometimes|string'
    }
  }

  get messages() {
    return {}
  }
}

module.exports = UserValidator
