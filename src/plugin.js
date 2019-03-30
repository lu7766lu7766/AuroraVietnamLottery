import { createApiBody, roopParse } from 'lib/myLib'
import apis, { SuccessCodes, UnLoginCode } from 'src/config/api'
import store from 'src/store'
import { LoginType } from 'module/login'
import errorCode from 'src/config/error'

import ApiRequest from 'lib/Request'

axios.interceptors.response.use((response) =>
{
  return response
}, function (error)
{
  return Promise.reject(error.response)
})

_.mixin({
  getVal: function (data, prop, defaultVal = '')
  {
    const res = _.head(_(data).at(prop).value())
    return !_.isUndefined(res)
      ? res
      : defaultVal
  }
}, {
  chain: false
})

export default {
  install: function (Vue, options)
  {
    Vue.prototype._ = _
    Vue.prototype.moment = moment
    Vue.prototype.$api = new ApiRequest()
    Vue.prototype.$callApi = async (key, data) =>
    {
      const keys = key.split('.')
      const paths = []
      let conf = apis
      _.forEach(keys, k =>
      {
        conf = conf[k]
        if (conf.uri) paths.push(conf.uri.replace('/', ''))
      })
      const uri = '/' + paths.join('/')
      const method = conf.method
      const res = await axios(createApiBody(method, uri, _.merge(_.pickBy(data), conf.data), conf.header))
        .catch(err =>
        {
          if (err.status === UnLoginCode) store.commit(LoginType.clearAccessToken)
          return
        })

      if (SuccessCodes.indexOf(res.data.code) == -1)
      {
        let msg = ''
        if (errorCode[res.data.code])
        {
          msg += errorCode[res.data.code] + '\n'
        }
        else
        {
          msg += 'service error!' + '\n'
        }
        // throw 'sevice error'
        res.data.msg = msg
        throw roopParse(res.data)
      }

      return roopParse(res.data)
    }
  }
}