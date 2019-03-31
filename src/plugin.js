import ApiRequest from 'lib/Request'

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
  }
}