'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChatMessage extends Model {
    static get hidden() {
        return ['id',
          'updated_at'
        ];
    }
    from() {
        return this.belongsTo('App/Models/User');
    };
    to() {
        return this.belongsTo('App/Models/User');
    };
}

module.exports = ChatMessage
