'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const ChatRoom = use('App/Models/ChatRoom');
const ChatMessage = use('App/Models/ChatMessage');

class ChatController {
  constructor({ socket, request }) {
    this.socket = socket;
    this.request = request;
    console.log('connected socket id %s', socket.id);

    socket.on('start', requestData => {
      console.log(requestData);
      this.getChatRoom(requestData.from, requestData.to).then(chatRoomData => {
        console.log(chatRoomData.rows[0].$attributes);
        if (chatRoomData.rows.length === 0) {
          this.createChatRoom(requestData.from, requestData.to, socket.id);
        }
        this.getChatRoomBySocketId(socket.id).then(chatRoomData2 => {
          if (chatRoomData2.rows.length === 0) {
            this.updateChatRoom(requestData.from, requestData.to, socket.id);
          }
        });
      });
    });

    socket.emit('previousMessages', {});
  }

  onMessage(data) {
    this.getChatRoomBySocketId(this.socket.id).then(chatRoomData => {
      if (chatRoomData.rows.length === 0) {
        this.socket.emitTo('error', { message: 'Envie o evento de start' }, [
          this.socket.id,
        ]);
        return;
      }
      const chatRoom = chatRoomData.rows[0].$attributes;

      console.log(chatRoom);
      if (chatRoom.user_ws_id1 === this.socket.id) {
        this.socket.emitTo('message', data, [chatRoom.user_ws_id2]);
        this.saveMessage(chatRoom.user_id1, chatRoom.user_id2, data);
      } else {
        this.socket.emitTo('message', data, [chatRoom.user_ws_id1]);
        this.saveMessage(chatRoom.user_id2, chatRoom.user_id1, data);
      }
    });

    console.log(this.socket);
    console.log(data);
  }

  onOpen(data) {
    console.log(data);
  }

  disconnected(socket) {
    console.log('disconnect socket id %s', socket.id);
  }

  async getChatRoom(userId1, userId2) {
    const chatRoom = await ChatRoom.query()
      .whereIn('user_id1', [userId1, userId2])
      .whereIn('user_id2', [userId1, userId2])
      .fetch();
    return chatRoom;
  }

  async getChatRoomBySocketId(socketId) {
    const chatRoom = await ChatRoom.query()
      .where('user_ws_id1', socketId)
      .orWhere('user_ws_id2', socketId)
      .fetch();
    return chatRoom;
  }

  async updateChatRoom(from, to, socketId) {
    await ChatRoom.query()
      .where('user_id1', from)
      .where('user_id2', to)
      .update({ user_ws_id1: socketId });

    await ChatRoom.query()
      .where('user_id2', from)
      .where('user_id1', to)
      .update({ user_ws_id2: socketId });
  }

  async createChatRoom(userId1, userId2, socketId) {
    const chatRoom = await ChatRoom.create({
      user_id1: userId1,
      user_id2: userId2,
      user_ws_id1: socketId,
    });
    return chatRoom;
  }

  async saveMessage(from, to, message) {
    await ChatMessage.create({
      from,
      to,
      message,
      readed: false,
    });
  }
}

module.exports = ChatController;
