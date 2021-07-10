'use strict';
const User = use('App/Models/User');

class CheckBanishment {
  async handle({ auth, response }, next) {
    var user = await auth.user;
    user = await User.findOrFail(user.id);
    if (user.status == 'banished') {
      const ban = await user
        .banishments()
        .orderBy('created_at', 'DESC')
        .limit(1)
        .fetch();
      return response.status(403).send({
        success: false,
        ban,
      });
    } else {
      await next();
    }
  }
}

module.exports = CheckBanishment;
