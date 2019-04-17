'use strict'
const curl = new (require('curl-request'))()
const Env = use('Env')
const SmsCodes = use('ApiCodes/Sms4000')

class SmsRepository
{
  async sendMessage(phone, message) {
    const res = await curl
      .setBody({
        'APIVersion': '2',
        'Message': message,
        'Phones': phone,
        'Account': Env.get('SMS_ACCOUNT', ''),
        'Password': Env.get('SMS_PASSWORD', ''),
        'Check': md5(Env.get('SMS_API_KEY', '') + message)
      })
      .post('http://sms.smartoceanglobal.com/api/Cmd/SendSMS')

    const body = JSON.parse(res.body)
    if (!body.IsSuccess)
    {
      throw new ApiErrorException(SmsCodes.SMS_SEND_FAIL, body.Message)
    }
    return body.Message
  }
}

module.exports = SmsRepository
