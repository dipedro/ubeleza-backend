'use strict'

const Env = use('Env')

class SystemSettingController {
  async index ({ response }) {
    var versions = {};
    versions.API_VERSION = Env.get('API_VERSION');
    versions.APK_VERSION = Env.get('APK_VERSION');
    versions.IOS_VERSION = Env.get('IOS_VERSION');
    return response.send({versions});

  }
}

module.exports = SystemSettingController
