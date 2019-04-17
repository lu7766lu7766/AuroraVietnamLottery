'use strict'
const SmsService = App.make('Service/Sms')

class SmsController
{
  async send(ctx) {
    // ctx.session.clear()
    // ctx.session.put('verify_code', {
    //   '0919844033': '123456'
    // })
    // dd(typeof ctx.session.get('verify_code'), ctx.session.get('verify_code'))
    return await SmsService.send(ctx)
  }
}

module.exports = SmsController
