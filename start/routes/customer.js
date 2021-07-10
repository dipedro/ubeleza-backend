'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
    return { greeting: 'Welcome to Ubeleza API' }
});

Route.group(() => {
    Route.resource('user', 'UserController').apiOnly()
}).prefix('v1/customer').namespace('Customer').middleware(['auth', 'is:customer'])