'use strict'

const PolicyController = require('../../app/Controllers/Http/PolicyController');

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

require('./auth')
require('./admin')
require('./customer')
require('./partner')
Route.post('/sessions', 'SessionController.create')
Route.get('/api/v1/policy', 'PolicyController.index')


