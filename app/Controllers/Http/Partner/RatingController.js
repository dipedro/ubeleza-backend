'use strict';

const Rating = use('App/Models/Rating');
const User = use('App/Models/User');
const Logger = use('Logger');
const Database = use('Database');

class RatingController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      const ratings = await Database.table('ratings')
        .where('to', user.id)
        .where('type', 'to_partner');
      await Database.table('ratings')
        .where('to', user.id)
        .where('seen', false)
        .where('type', 'to_partner')
        .update({ seen: true });
      return response.send({
        ratings,
      });
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }
  async onlyUnseen({ response, auth }) {
    try {
      const user = await auth.user;
      const ratings = await Database.table('ratings')
        .where('to', user.id)
        .where('seen', false)
        .where('type', 'to_partner')
        .limit(1);
      await Database.table('ratings')
        .where('to', user.id)
        .where('seen', false)
        .where('type', 'to_partner')
        .update({ seen: true });
      return response.send({
        ratings,
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
      const { to, feedback, stars } = request.all();
      await Rating.create({
        from: user.id,
        to,
        type: 'to_customer',
        feedback,
        stars,
      });
      var user_to = await User.find(to);
      var starsAvg = await Database.table('ratings')
        .where('to', user_to.id)
        .where('type', 'to_customer')
        .limit(100)
        .getAvg('stars');
      await user_to.customer().update({ stars: starsAvg });
      return response.status(200).send({
        success: true,
        message: 'Avaliação enviada com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao enviar avaliação! ' + error,
      });
    }
  }

  async show({ params, response, auth }) {
    try {
      const user = await auth.user;
      const rate = await Rating.query()
        .where('to', user.id)
        .where('id', params.id)
        .fetch();
      if (rate) {
        return rate;
      } else {
        return response.status(404).send({
          success: false,
          message: 'Avaliação não encontrada!',
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

module.exports = RatingController;
