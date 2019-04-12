'use strict'

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
