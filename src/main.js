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

Vue.use(VueOnsen)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
