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
  Route.put('point/transfer', 'UserController.transferPoint').validator('TransferPoint')
  Route.put('point/add', 'UserController.addPoint').middleware('admin').validator(['TransferPoint'])

  // about options
  Route.get('options/gameType', 'BetController.gameTypeOptions')

  // about user
  Route.post('user/create', 'UserController.createUser').validator('AddUser')
  Route.get('user', 'UserController.getUser')
  Route.put('user/update', 'UserController.updateUser').validator('UpdateUser')

  // about bet
  Route.post('bet', 'BetController.index').validator('Bet')

  // about report
  Route.get('report/bet', 'ReportController.betDetail').validator(['BetReport'])
  Route.get('report/bet/total', 'ReportController.betTotal').validator('BetReport')
  Route.get('report/transfer', 'ReportController.transferDetail').validator(['TransferReport'])
  Route.get('report/transfer/total', 'ReportController.transferTotal').validator(['TransferReport'])
  Route.get('report/store', 'ReportController.storeDetail')
  Route.get('report/store/total', 'ReportController.storeTotal')

  //
  // Route.put('passPoint', 'UserController.passPointChanged').middleware('admin')
}).middleware(['auth'])

Route.post('test/message', (ctx) =>
{
  Log.test(ctx.request.input('message'))
  return true
})
Route.get('test/ip', ctx =>
{
  dd(ctx.request.ip())
}).middleware('local')
