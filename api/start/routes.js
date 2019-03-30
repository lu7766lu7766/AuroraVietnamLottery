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
Route.post('login', 'UserController.login').validator('Login')
Route.get('isLogin', 'UserController.isLogin')
Route.post('register', 'UserController.register').validator('AddUser')

Route.group(() =>
{
  Route.get('fetch', 'ReportController.fetch')
  Route.get('settle', 'ReportController.settle')
}).middleware('local')

Route.group(() =>
{
  // about point
  Route.put('transferPoint', 'UserController.transferPoint').validator('TransferPoint')
  Route.put('addPoint', 'UserController.addPoint').middleware('admin').validator(['TransferPoint'])

  // about options
  Route.get('options/gameType', 'BetController.gameTypeOptions')

  // about user
  Route.post('user/create', 'UserController.createUser').validator('AddUser')
  Route.get('user', 'UserController.getUser')

  // about bet
  Route.post('bet', 'BetController.index').validator('Bet')

  // about report
  // Route.get('detail/bet', 'ReportController.betDetail').validator(['Page', 'BetReport'])
  // Route.get('detail/bet/total', 'ReportController.betTotal').validator('BetReport')
  // Route.get('detail/store', 'ReportController.storeDetail').validator(['Page', 'Store'])
  // Route.get('detail/store/total', 'ReportController.storeTotal').validator(['Store'])

  // Route.post('user/update', 'UserController.updateUser')
  // Route.put('passPoint', 'UserController.passPointChanged').middleware('admin')
}).middleware(['auth'])
