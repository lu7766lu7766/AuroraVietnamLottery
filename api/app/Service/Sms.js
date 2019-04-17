'use strict'
const SmsRepo = App.make('Repositories/Sms')
const SmsCodes = use('ApiCodes/Sms4000')

class SmsService
{
  constructor() {
    this.minWaitSecs = 30
  }

  async send({session, request}) {
    let code = ''
    while (code.length < 6)
    {
      code += Math.floor(Math.random() * 10) + ''
    }
    let message = `Verify Code: ${code}`
    const phone = request.input('phone')
    const verify_code = session.get('verify_code', {})
    const created_at = moment().format('YYYY-MM-DD HH:mm:ss')
    const prev_time = _.head(_(verify_code[phone]).at(`created_at`).value())
    if (prev_time && moment().diff(moment(prev_time), 'seconds') < this.minWaitSecs)
    {
      throw new ApiErrorException(SmsCodes.TIME_TOO_CLOSE)
    }
    verify_code[phone] = {
      code,
      created_at
    }
    session.put('verify_code', verify_code)
    return await SmsRepo.sendMessage(request.input('phone'), message)
  }
}

module.exports = SmsService
