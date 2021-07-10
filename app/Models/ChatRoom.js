'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class ChatRoom extends Model {
  static get hidden() {
    return ['id', 'updated_at'];
  }
  UserId1() {
    return this.belongsTo('App/Models/User');
  }
  UserId2() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = ChatRoom;
