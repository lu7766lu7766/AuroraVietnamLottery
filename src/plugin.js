import { createApiBody, roopParse } from 'lib/myLib'
import apis, { SuccessCodes, UnLoginCode } from 'src/config/api'
import store from 'src/store'
import { LoginType } from 'module/login'

axios.interceptors.response.use((response) =>
{
  return response
}, function (error)
{
  return Promise.reject(error.response)
})

export default {
  install: function (Vue, options)
  {
    Vue.prototype._ = _
    Vue.prototype.moment = moment
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
        alert('service error!')
        throw 'sevice error'
      }

      return roopParse(res.data)
    }
  }
}