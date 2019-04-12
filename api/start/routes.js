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

// about bet
Route.group(() =>
{
  Route.post('/', 'BetController.index').validator('Bet')
  // Route.put('passPoint', 'UserController.passPointChanged').middleware('admin')
}).prefix('bet').middleware(['auth'])

// about options
Route.group(() =>
{
  Route.get('gameType', 'BetController.gameTypeOptions')
}).middleware(['auth'])

// about report
Route.group(() =>
{
  Route.get('bet', 'ReportController.betDetail').validator(['BetReport'])
  Route.get('bet/total', 'ReportController.betTotal').validator('BetReport')
  Route.get('transfer', 'ReportController.transferDetail').validator(['TransferReport'])
  Route.get('transfer/total', 'ReportController.transferTotal').validator(['TransferReport'])
  Route.get('store', 'ReportController.storeDetail')
  Route.get('store/total', 'ReportController.storeTotal')
  Route.get('history/lottery', 'ReportController.getHistoryLottery')
  Route.get('history/lottery/total', 'ReportController.getHistoryLotteryTotal')
}).prefix('report').middleware(['auth'])

// about user
Route.group(() =>
{
  Route.post('/', 'UserController.createUser').validator('AddUser')
  Route.get('/', 'UserController.getUser')
  Route.put('/', 'UserController.updateMyself').validator('UpdateMyself')
  // about point
  Route.put('point/transfer', 'UserController.transferPoint').validator('TransferPoint')
  Route.put('point/add', 'UserController.addPoint').middleware('admin').validator(['TransferPoint'])
}).prefix('user').middleware(['auth'])

//////////////////////////////////////////////////////////////////////////////

Route.post('test/message', (ctx) =>
{
  Log.test(ctx.request.input('message'))
  return true
})
Route.get('test/ip', ctx =>
{
  dd(ctx.request.ip())
}).middleware('local')
