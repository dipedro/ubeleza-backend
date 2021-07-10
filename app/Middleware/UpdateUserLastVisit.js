'use strict'
const User = use('App/Models/User');

class UpdateUserLastVisit {
  async handle ({ auth, request }, next) {
    var user = await auth.user;
    user = await User.findOrFail(user.id);
    user.merge({
      last_visit: new Date()
    })
    user.save()
    await next()
  }
}

module.exports = UpdateUserLastVisit
