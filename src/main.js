import './init'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import './assets/css/theme.css'
import './assets/css/onsen-css-components.min.css'
import VueOnsen from 'vue-onsenui'

import 'bootstrap/dist/css/bootstrap.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import VeeValidate from 'vee-validate'
import en from 'vee-validate/dist/locale/en'

import 'bootstrap/dist/css/bootstrap.css'

import VueBus from 'vue-bus'

Vue.use(VueBus)


const config = {
  locale: 'en',
  events: 'input|blur',
  dictionary: {en}
}
en.messages.required = () => 'this field is required'
en.messages.length = () => 'length is valid'

Vue.use(VueOnsen)
Vue.use(ElementUI)
Vue.use(VeeValidate, config)
Vue.config.productionTip = false

import MyPlugin from 'src/plugin'

Vue.use(MyPlugin)


// import VueLoading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
//
// //vue-loading-overlay
// Vue.use(VueLoading) //Use default options
import 'vue2-toast/lib/toast.css'
import Toast from 'vue2-toast'

Vue.use(Toast)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
