'use strict';

const { route } = require('@adonisjs/framework/src/Route/Manager');

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

Route.get('/', () => {
  return { greeting: 'Welcome to Ubeleza API' };
});

Route.group(() => {
  Route.resource('user', 'UserController').apiOnly();
  Route.resource('serviceType', 'ServiceTypeController').apiOnly();
  Route.resource('certificate', 'PartnerCertificateController').apiOnly();
  Route.resource('address', 'AddressController').apiOnly();
  Route.resource('service', 'PartnerServiceController').apiOnly();
  Route.get('availableCertificate', 'AvailableCertificateController.index');
  Route.get('home', 'HomeController.index');
  Route.get('availableCertificate/:id', 'AvailableCertificateController.show');
  Route.post('shootCoupon/:id', 'CouponController.send');
  Route.resource('customer', 'CustomerController').apiOnly();
  Route.resource(
    'creditMovimentation',
    'CreditMovimentationController'  ).apiOnly();
  Route.get('bank', 'BankController.index');
  Route.resource('notification', 'NotificationController').apiOnly();
  Route.resource('history', 'HistoryController').apiOnly();
  Route.resource('bankAccount', 'BankAccountController').apiOnly();
  Route.resource('coupon', 'CouponController').apiOnly();
  Route.get('pauseCoupon/:id', 'CouponController.pauseCoupon');
  Route.get('reactivateCoupon/:id', 'CouponController.reactivateCoupon');
  Route.resource('me', 'PartnerController').apiOnly();
  Route.post('postImage', 'PartnerController.postImage');
  Route.delete('destroyImage/:id', 'PartnerController.destroyImage');
  Route.get('appointment', 'ServiceRequestController.index');
  Route.get('confirmService/:id', 'ServiceRequestController.confirmService')
  Route.get('version', 'SystemSettingController.index');
  Route.get('transportMethod', 'TransportMethodController.index');
  Route.resource('serviceRequest', 'ServiceRequestController').apiOnly();
  Route.put('cancelService', 'ServiceRequestController.updateCancel');
  Route.get('filterServiceRequest', 'ServiceRequestController.filter');
  Route.resource('chatMessage', 'ChatMessageController').apiOnly();
  Route.post('getService', 'RadarController.index');
  Route.put('acceptService/:id', 'RadarController.accept');
  Route.put('declineService/:id', 'RadarController.decline');
  Route.resource('rating', 'RatingController').apiOnly();
  Route.get('ratingUnseen', 'RatingController.onlyUnseen');
  Route.resource('faq', 'FaqController').apiOnly();
  Route.get(
    'filterCreditMovimentation',
    'CreditMovimentationController.filter'
  );
  Route.post('drawRequest', 'CreditMovimentationController.draw');
  Route.post('serviceTypeSubscribe', 'ServiceTypeController.subscribe');
  Route.post('serviceTypeUnsubscribe', 'ServiceTypeController.unsubscribe');
  Route.get('myServices', 'ServiceTypeController.myServices');
  Route.get('myServices/:id', 'ServiceTypeController.showMyServices');
  Route.get('issueTypes', 'ServiceIssueController.index');
  Route.post('serviceIssue', 'ServiceIssueController.store');
  Route.post('serviceSugestion', 'ServiceSugestionController.store');

  Route.resource('question', 'QuestionController').apiOnly();
})
  .prefix('api/v1/partner')
  .middleware(['check_ban', 'last', 'partner_auth'])
  .namespace('Partner');
