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

Route.get('settle', 'BetController.settle').middleware('local')

Route.group(() =>
{
  Route.post('createUser', 'UserController.createUser')
  Route.post('changePoint', 'UserController.changePoint ')
  Route.get('user', 'UserController.getUser')

  Route.post('bet', 'BetController.index')


  Route.get('result', 'BetController.result')

}).middleware(['auth'])
