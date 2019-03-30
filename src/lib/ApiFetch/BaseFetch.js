import { createApiBody, roopParse } from 'lib/myLib'
import { SuccessCodes, UnLoginCode } from 'src/config/api'
import store from 'src/store'
import { LoginType } from 'module/login'
import errorCode from 'src/config/error'

export default class BaseFetch
{
  constructor() {
  }

  async request(key, data, options) {
    if (typeof this.config !== 'object') throw 'please init this apiFetch'
    const conf = this.config[key]
    if (!conf) throw 'not found the config'
    const res = await axios(createApiBody(conf.method, conf.uri, _.merge(_.pickBy(data), conf.data), conf.header))
    let errorMessages = []
    _.forEach(res.data.code, code =>
    {
      switch (code)
      {
        case SuccessCodes:

          break
        case UnLoginCode:
          store.commit(LoginType.clearAccessToken)
          break
        default:
          errorMessages.push(errorCode[code])
          break
      }

    })
    return errorMessages.length
      ? this.errorProccess(errorMessages)
      : roopParse(res.data)

  }

  errorProccess(errorMessages) {
    alert(errorMessages.join('\n'))
  }

}
