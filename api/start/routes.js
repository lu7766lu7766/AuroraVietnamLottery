'use strict'

/*
 |--------------------------------------------------------------------------
 | Routes
 |--------------------------------------------------------------------------
 |
 | Http routes are entry points to your web application. You can create
 | routes for different URL's and bind Controller actions to them.
 |
 | A complete guide on routing is available here.
 | http://adonisjs.com/docs/4.1/routing
 |
 */

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.on('/').render('welcome')
// Route.get('/', () => 'hello world!!')
Route.post('login', 'UserController.login') // .validator('Login')
Route.get('check', 'UserController.isLogin')
Route.post('register', 'UserController.register')

Route.get('fetch', 'ReportController.fetch').middleware('local')
Route.get('settle', 'ReportController.settle').middleware('local')


Route.group(() =>
{
  Route.get('options/gameType', 'BetController.gameTypeOptions')

  Route.post('user/create', 'UserController.createUser')
  // Route.post('user/update', 'UserController.updateUser')
  Route.put('point', 'UserController.changePoint')
  Route.put('passPoint', 'UserController.passPointChanged').middleware('admin')
  Route.get('user', 'UserController.getUser')

  Route.post('bet', 'BetController.index')

  Route.get('detail/bet', 'ReportController.betDetail')
  Route.get('detail/bet/total', 'ReportController.betTotal')
  Route.get('detail/store', 'ReportController.storeDetail')
  Route.get('detail/store/total', 'ReportController.storeTotal')

}).middleware(['auth'])
