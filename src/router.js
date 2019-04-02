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
      path: '/',
      component: () => import('pages/Main'),
      children: [
        {
          path: 'betting',
          name: 'betting',
          component: () => import('pages/Betting')
        },
        {
          path: 'report',
          component: () => import('pages/Report'),
          children: [
            {
              path: 'bet',
              name: 'bet-report',
              component: () => import('pages/Report/Bet')
            },
            {
              path: 'transfer',
              name: 'transfer-report',
              component: () => import('pages/Report/Transfer')
            }
          ]
        },
        {
          path: 'transferPoint',
          name: 'transferPoint',
          component: () => import('pages/TransferPoint')
        }
      ]
    },
    {path: '*', redirect: '/login'}
  ]
})
