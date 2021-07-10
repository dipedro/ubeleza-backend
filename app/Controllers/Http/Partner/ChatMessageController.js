'use strict';

const ChatMessage = use('App/Models/ChatMessage');
const Logger = use('Logger');
const Database = use('Database');
class ChatMessageController {
  async index({ auth, response }) {
    try {
      const user = await auth.user;
      const { chat_user_id, page = 1 } = request.all();
      const limit = 30;
      const chatMessages = await Database.table('chat_messages')
        .where('from', user.id)
        .where('to', chat_user_id)
        .orWhere('to', user.id)
        .where('from', chat_user_id)
        .paginate(page, limit);

      const newChatMessages = chatMessages.map(data => {
        return {
          isMy: data.from === user.id ? true : false,
          message: data.message,
          hour: data.created_at,
        };
      });
      return response.send({
        newChatMessages,
      });
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async store({ request, response, auth }) {
    try {
      const user = await auth.user;
      const { to, message } = request.all();
      await ChatMessage.create({
        from: user.id,
        to,
        message,
        readed: false,
      });
      return response.status(200).send({
        success: true,
        message: 'Mensagem enviada com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao enviar menssagem! ' + error,
      });
    }
  }

  async show({ params, response }) {
    try {
      const chat = await ChatMessage.query()
        .where('from', params.id)
        .orWhere('to', params.id)
        .fetch();
      if (chat) {
        return chat;
      } else {
        return response.status(404).send({
          success: false,
          message: 'Conversa não encontrada!',
        });
      }
    } catch (error) {
      return response.status(404).send({
        success: false,
        message: 'Erro ' + error,
      });
    }
  }
}

module.exports = ChatMessageController;
