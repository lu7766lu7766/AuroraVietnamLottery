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
Route.post('register', 'UserController.register').validator('User/Add')

Route.group(() =>
{
  Route.get('fetch', 'ReportController.fetch')
  Route.get('settle', 'ReportController.settle')
}).middleware('local')

// about bet
Route.group(() =>
{
  Route.post('/', 'BetController.index').validator('Bet')
}).prefix('bet').middleware(['auth'])

// about options
Route.group(() =>
{
  Route.get('gameType', 'BetController.gameTypeOptions')
}).prefix('options').middleware(['auth'])

// about report
Route.group(() =>
{
  Route.get('bet', 'ReportController.betDetail').validator(['Report/Bet'])
  Route.get('bet/total', 'ReportController.betTotal').validator('Report/Bet')
  Route.get('transfer', 'ReportController.transferDetail').validator(['Report/Transfer'])
  Route.get('transfer/total', 'ReportController.transferTotal').validator(['Report/Transfer'])
  Route.get('store', 'ReportController.storeDetail').middleware('admin')
  Route.get('store/total', 'ReportController.storeTotal').middleware('admin')
  Route.get('history/lottery', 'ReportController.getHistoryLottery')
  Route.get('history/lottery/total', 'ReportController.getHistoryLotteryTotal')
}).prefix('report').middleware(['auth'])

// about user
Route.group(() =>
{
  Route.post('/', 'UserController.userAddForSupplier').middleware('manager').validator('User/Add')
  Route.get('/', 'UserController.getUser')
  Route.put('/', 'UserController.updateMyself').validator('User/UpdateMyself')
  // about point
  Route.put('point/transfer', 'UserController.transferPoint').validator('Point/Transfer')
  Route.put('point/add', 'UserController.addPoint').middleware('admin').validator(['Point/Transfer'])
  // user list

}).prefix('user').middleware(['auth'])
// about user for backend
Route.group(() =>
{
  Route.get('list', 'UserController.userList')
  Route.get('list/total', 'UserController.userListTotal')
  Route.post('maintain', 'UserController.userAdd').validator('User/Add')
  Route.put('maintain', 'UserController.userUpdate').validator('User/Update')
  Route.delete('maintain', 'UserController.userDelete').validator('User/Delete')
}).prefix('user').middleware(['auth', 'admin'])

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
