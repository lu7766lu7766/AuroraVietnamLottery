'use strict'

// const UserCodes = use('ApiCodes/User1000')

class UserUpdateMySelfValidator
{
  get rules() {
    return {
      password: 'string',
      nickName: 'string'
    }
  }

  get messages() {
    return {}
  }
}

module.exports = UserUpdateMySelfValidator
