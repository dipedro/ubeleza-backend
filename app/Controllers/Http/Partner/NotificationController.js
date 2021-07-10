'use strict'
const Partner = use('App/Models/Partner');
const Notification = use('App/Models/Notification');

class NotificationController {
  async index ({ request, response, auth }) {
    const user = await auth.user;
    const partner = await Partner.findByOrFail('user_id', user.id);
    const notifications = await Notification.query().where('to', user.id).where('role', 'partner').fetch();
    response.send(notifications);
  }

  async update ({ params, request, response }) {
  }
}

module.exports = NotificationController
