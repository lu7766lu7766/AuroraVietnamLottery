import ApiRequest from 'lib/Request'
import { Role } from 'config/role'

global.Role = Role

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
    Vue.prototype.Role = Role

    Vue.filter('dateTime', function (value)
    {
      return moment(value).format('YYYY-MM-DD HH:mm:ss')
    })
    Vue.filter('date', function (value)
    {
      return moment(value).format('YYYY-MM-DD')
    })
  }
}