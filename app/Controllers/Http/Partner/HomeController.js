'use strict';

const Logger = use('Logger');
const Partner = use('App/Models/Partner');
const CreditMovimentation = use('App/Models/CreditMovimentation');
const moment = require('moment');
class HomeController {
  async index({ response, auth }) {
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      const services = await partner.services().fetch();
      var curr = new Date();
      var week = [];
      var d;
      for (let i = 1; i <= 7; i++) {
        let first = curr.getDate() - curr.getDay() + i;
        let day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
        d = day;
        let today = await partner
          .serviceRequests()
          .with('customer.user')
          .with('service')
          .where('date', day)
          .fetch();
        today = today.toJSON();
        if (today.length > 0) {
          var name = moment(today[0].date).format('dddd');
          var todaySR = [];
          today.forEach(async t => {
            const aux = {};
            aux.title = t.service.name;
            aux.date = new Date(t.date).toISOString().slice(0, 10);
            aux.start = t.time;
            var ss = services.toJSON();
            var sTime = ss.filter(
              s => s.service_type_id == t.service.service_type_id
            );
            // var start = new Date(
            //   aux.date.slice(0, 4),
            //   aux.date.slice(5, 7),
            //   aux.date.slice(8, 10),
            //   aux.start.slice(0, 2),
            //   aux.start.slice(3, 5),
            //   aux.start.slice(6, 8)
            // );
            const a = moment.duration(aux.start);
            const b = moment.duration(sTime[0].time);
            aux.end = a.add(b);
            aux.end =
              moment.duration(aux.end).toISOString().length == 5
                ? moment.duration(aux.end).toISOString().slice(2, 4) + ':00:00'
                : moment.duration(aux.end).toISOString().slice(2, 4) +
                  ':' +
                  moment.duration(aux.end).toISOString().slice(5, 7) +
                  ':00';
            aux.customer = t.customer.user.fullname;
            let duration = await partner
              .services()
              .where('services.id', t.customer.user.id)
              .fetch();
              
            aux.start = new Date(aux.date).toISOString();
            aux.end = moment(aux.start).add(duration);
            aux.status = t.status;
            aux.duration = duration;
            todaySR.push(aux);
          });
          week.push({ [name]: todaySR });
        }
      }
      const todayServices = await partner
        .serviceRequests()
        .with('customer.user')
        .with('service')
        .where('date', new Date().toISOString().slice(0, 10))
        .fetch();
      const creditMovimentations = await CreditMovimentation.query()
        .where('user_id', user.id)
        .fetch();
      return response.send({
        todayServices,
        ['Semana ' +
        moment(d).format('w') +
        ' de ' +
        moment(d).format('YYYY')]: week
      });
    } catch (error) {
      Logger.error('Error : ', error);
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }
}

module.exports = HomeController;
