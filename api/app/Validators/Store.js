'use strict'

class StoreValidator
{
  get rules() {
    return {
      status: 'sometimes|number|in:-1,1'
    }
  }

  get messages() {
    return {
      'status.number': 'status must be number'
    }
  }
}

module.exports = StoreValidator
