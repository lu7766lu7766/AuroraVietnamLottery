import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('pages/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('pages/Register')
    },
    {
      path: '/betting',
      component: () => import('pages/Main'),
      children: [
        {
          path: '',
          name: 'betting',
          component: () => import('pages/Betting')
        }
      ]
    },
    {
      path: 'report',
      component: () => import('pages/Main'),
      children: [
        {
          path: 'bet',
          name: 'bet-report',
          component: () => import('pages/Report/Bet')
        },
        {
          path: 'store',
          name: 'store-report',
          component: () => import('pages/Report/Store')
        }
      ]
    },
    {path: '*', redirect: '/login'}
  ]
})
