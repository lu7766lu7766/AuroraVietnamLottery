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
            },
            {
              path: 'history-lottery',
              name: 'history-lottery',
              component: () => import('pages/Report/HistoryLottery')
            },
            {
              path: 'store',
              name: 'store-report',
              component: () => import('pages/Report/Store')
            }
          ]
        },
        {
          path: 'point',
          component: () => import('pages/Point'),
          children: [
            {
              path: 'transfer',
              name: 'transfer-point',
              component: () => import('pages/Point/Transfer')
            },
            {
              path: 'add',
              name: 'add-point',
              component: () => import('pages/Point/Add')
            }
          ]
        },
        {
          path: 'user',
          component: () => import('pages/User'),
          children: [
            {
              path: 'create',
              name: 'create-user',
              component: () => import('pages/User/Create')
            },
            {
              path: 'update-myself',
              name: 'update-myself',
              component: () => import('pages/User/UpdateMyself')
            }
          ]
        }
      ]
    },
    {path: '*', redirect: '/login'}
  ]
})
