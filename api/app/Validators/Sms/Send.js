'use strict'
const UserCodes = use('ApiCodes/User1000')
const SmsCodes = use('ApiCodes/Sms4000')

class SmsSend
{
  get rules() {
    return {
      'phone': 'required|unique:users,phone'
    }
  }

  get messages() {
    return {
      'phone.requred': UserCodes.PHONE_IS_REQUIRED,
      'phone.unique': SmsCodes.PHONE_IS_EXISTS
    }
  }
}

module.exports = SmsSend
