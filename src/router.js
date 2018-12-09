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
      component: () => import('pages/Betting'),
      children: [
        {
          path: 'lo',
          component: () => import('pages/Betting/Lo'),
          children: [
            {
              path: 'game1',
              name: 'LoGame1',
              component: () => import('pages/Betting/Lo/Game1')
            },
            {
              path: 'game2',
              name: 'LoGame2',
              component: () => import('pages/Betting/Lo/Game2')
            }
          ]
        }
      ]
    },
    {path: '*', redirect: '/login'}
  ]
})
