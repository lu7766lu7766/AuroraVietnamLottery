'use strict'

class SmsSend
{
  get rules() {
    return {
      'phone': 'required'
    }
  }

  get messages() {
    return {
      'phone.requred': 'x'
    }
  }
}

module.exports = SmsSend
