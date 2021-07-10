'use strict';

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
const Route = use('Route');

Route.group(() => {
  Route.post('/register', 'AuthController.register').as(
    'partner.auth.register'
  );
  Route.post('/login', 'AuthController.login').as('partner.auth.login');
})
  .prefix('api/v1/partner/auth')
  .namespace('Partner');

Route.group(() => {
  Route.post('/register', 'AuthController.register').as('admin.auth.register');
  Route.post('/login', 'AuthController.login').as('admin.auth.login');
})
  .prefix('api/v1/admin/auth')
  .namespace('Admin');

Route.group(() => {
  Route.post('/register', 'AuthController.register').as(
    'customer.auth.register'
  );
  Route.post('/login', 'AuthController.login').as('customer.auth.login');
})
  .prefix('api/v1/customer/auth')
  .namespace('Customer');

Route.resource('user', 'UserController').apiOnly();

Route.group(() => {
  Route.post('/refresh', 'AuthController.refresh').as('partner.auth.refresh');
  Route.post('/logout', 'AuthController.logout').as('partner.auth.logout');
  // Route.post('/forgotPassword', 'AuthController.forgotPassword').as(
  //   'partner.auth.forgotPassword'
  // );
  // Route.put('/forgotPassword/:token/:email', 'AuthController.updatePassword');
  Route.post('/sendVerificationCode', 'AuthController.updateVerificationCode');
  Route.get('/verifyPartnerStatus/:id', 'AuthController.verifyPartnerStatus');
  Route.post('/verifyIfContactExists', 'AuthController.verifyIfContactExists');
}).prefix('api/v1/auth');

Route.get('login/facebook', 'AuthController.redirectFacebook');
Route.get('facebook/callback', 'AuthController.callbackFacebook');
