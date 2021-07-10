'use strict';
const Logger = use('Logger');
const CreditMovimentation = use('App/Models/CreditMovimentation');
const moment = require('moment');
const Database = use('Database');

class CreditMovimentationController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      var curr = new Date();
      var creditMovimentations = [];
      for (let i = 0; i <= 6; i++) {
        let first = curr.getDate() - curr.getDay() + i;
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
        let dailyCreditMovimentations = await Database.from(
          'credit_movimentations'
        )
          .where('user_id', user.id)
          .whereRaw('year(`when`) = ?', day.slice(0, 4))
          .whereRaw('month(`when`) = ?', day.slice(5, 7))
          .whereRaw('day(`when`) = ?', Number(day.slice(8, 10)) - 1)
          .select('*');
        const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
        const months = [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez',
        ];
        const date = new Date(day);
        let newDailyCreditMovimentations;
        if (dailyCreditMovimentations.length > 0) {
          newDailyCreditMovimentations = {
            title: {
              dayWeek: daysWeek[date.getDay()],
              day: date.getDate(),
              month: months[date.getMonth()],
            },
            data: dailyCreditMovimentations.map(data => {
              return {
                isAddition: data.isAddition === '0' ? false : true,
                price: data.amount,
                title: data.name,
                hour: data.when.toISOString().slice(11, 16),
              };
            }),
          };
        } else {
          newDailyCreditMovimentations = {
            title: {
              dayWeek: daysWeek[date.getDay()],
              day: date.getDate(),
              month: months[date.getMonth()],
            },
          };
        }

        creditMovimentations.push(newDailyCreditMovimentations);
      }

      var credits = await Database.from('credit_movimentations')
        .where('user_id', user.id)
        .where('type', 'credit')
        .getSum('amount');

      var debits = await Database.from('credit_movimentations')
        .where('user_id', user.id)
        .where('type', 'debit')
        .getSum('amount');
      const amount = credits - debits;
      return response.send({
        creditMovimentations,
        amountUser: amount,
      });
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async filter({ request, auth, response }) {
    const user = await auth.user;
    var creditMovimentations = [];
    const { from, to } = request.all();
    if (from && to) {
      creditMovimentations = await CreditMovimentation.query()
        .where('user_id', user.id)
        .where('created_at', '>=', moment(from).format('YYYY-MM-DD HH:mm:ss'))
        .where('created_at', '<=', moment(to).format('YYYY-MM-DD HH:mm:ss'))
        .fetch();
      return response.send({
        creditMovimentations,
      });
    }
  }

  async draw({ request, auth, response }) {
    const user = await auth.user;
    const { when, bank_account, amount } = request.only([
      'when',
      'bank_account',
      'amount',
    ]);
    var credits = await Database.from('credit_movimentations')
      .where('user_id', user.id)
      .where('type', 'credit')
      .getSum('amount');
    var debits = await Database.from('credit_movimentations')
      .where('user_id', user.id)
      .where('type', 'debit')
      .getSum('amount');
    const cash = credits - debits;
    if (amount > cash) {
      return response.status(400).send({
        success: false,
        message: 'Saldo insuficiente!',
      });
    } else {
      await user.creditMovimentations().create({
        type: 'debit',
        amount,
        name: 'Saque para conta bancária ' + bank_account,
        when,
      });
      return response.send({
        success: true,
        message: 'Saque realizado com sucesso!',
      });
    }
  }

  // async store({ request, response, auth }) {
  //   try {
  //     const user = await auth.user;
  //     const { service_request_id, type, name, amount, when } = request.all();
  //     await user.creditMovimentations().create({
  //         service_request_id,
  //         type,
  //         name,
  //         amount,
  //         when
  //     });
  //     return response.status(200).send({
  //       success: true,
  //       message: 'Registro adicionado com sucesso!',
  //     });
  //   } catch (error) {
  //     return response.status(500).send({
  //       success: false,
  //       message: 'Erro ao adicionar movimentação de crédito! ' + error,
  //     });
  //   }
  // }

  async show({ params, response }) {
    try {
      const creditMovimentation = await CreditMovimentation.query()
        .where('id', params.id)
        .firstOrFail();
      return response.send({ creditMovimentation });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async destroy({ params, auth, response }) {
    try {
      const creditMovimentation = await CreditMovimentation.query()
        .where('id', params.id)
        .firstOrFail();

      await creditMovimentation.delete();
      return response.status(200).send({
        success: true,
        message: 'Registro removido com sucesso!',
      });
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao remover registro! ' + error,
      });
    }
  }
}

module.exports = CreditMovimentationController;
