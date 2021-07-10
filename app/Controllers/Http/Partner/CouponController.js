'use strict';
const Coupon = use('App/Models/Coupon');
const Partner = use('App/Models/Partner');
const crypto = require('crypto');
const { validate } = use('Validator');
const moment = require('moment');

class CouponController {
  async index({ request, response, auth }) {
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      const now = new Date();
      const coupons = await Coupon.query()
        .where('partner_id', partner.id)
        .where('expire_at', '>', now.toISOString())
        .fetch();
      let newCoupons = [];
      coupons.rows.map(coupon => {
        const expire_date = new Date(coupon.$attributes.expire_at);
        const now = new Date();
        const timeLeft = moment.duration(expire_date - now);
        const couponInsert = coupon.$attributes;
        newCoupons.push({
          ...couponInsert,
          left_seconds: timeLeft.asSeconds(),
        });
      });
      response.send(newCoupons);
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: error.toString(),
      });
    }
  }

  async store({ request, response, auth }) {
    const data = request.only([
      'title',
      'description',
      'off',
      'type',
      'service_type_id',
      'partner_service_id',
      'duration',
    ]);

    const rules = {
      title: 'required',
      description: 'required',
      off: 'required',
      type: 'required',
      duration: 'required',
    };

    const messages = {
      'title.required': 'O título do cupom é obrigatório!',
      'description.required': 'A descrição do cupom é obrigatória!',
      'off.required': 'O valor do cupom é obrigatório!',
      'type.required': 'O tipo do cupom é obrigatório!',
      'duration.required': 'A duração do cupom é obrigatória!',
    };

    const validation = await validate(data, rules, messages);
    if (validation.fails()) {
      const validation_messages = validation.messages().map(msgObject => {
        return msgObject.message;
      });

      return response.status(400).send({
        success: false,
        message: validation_messages,
      });
    }
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      var expire_at = new moment().add(
        parseInt(data.duration.slice(0, 2)),
        'hours'
      );
      var expire_at = new moment(expire_at).add(
        parseInt(data.duration.slice(3, 5)),
        'minutes'
      );
      const coupon = await partner.coupons().create({
        title: data.title,
        description: data.description,
        off: data.off,
        type: data.type,
        expire_at: moment(expire_at).format('YYYY-MM-DD HH:mm:ss'),
        service_type_id: data.service_type_id,
        origin: 'partner',
        status: 'active',
      });
      var code;
      code = crypto.randomBytes(4).toString('hex');
      code = code + coupon.id;
      coupon.merge({
        code,
      });
      await coupon.save();

      return coupon;
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro' + error,
      });
    }
  }

  async show({ params, response }) {
    try {
      const coupon = await Coupon.query().where('id', params.id).firstOrFail();
      if (coupon) {
        return coupon;
      } else {
        return response.status(404).send({
          success: false,
          message: 'Cupon não encontrado!',
        });
      }
    } catch (error) {
      return response.status(404).send({
        success: false,
        message: 'Erro ' + error,
      });
    }
  }

  async update({ params, request, response }) {
    const data = request.only([
      'title',
      'description',
      'off',
      'type',
      'service_type_id',
      'partner_service_id',
      'duration',
    ]);

    const rules = {
      title: 'required',
      description: 'required',
      off: 'required',
      type: 'required',
      duration: 'required',
    };

    const messages = {
      'title.required': 'O título do cupom é obrigatório!',
      'description.required': 'A descrição do cupom é obrigatória!',
      'off.required': 'O valor do cupom é obrigatório!',
      'type.required': 'O tipo do cupom é obrigatório!',
      'duration.required': 'A duração do cupom é obrigatória!',
    };

    const validation = await validate(data, rules, messages);
    if (validation.fails()) {
      const validation_messages = validation.messages().map(msgObject => {
        return msgObject.message;
      });

      return response.status(400).send({
        success: false,
        message: validation_messages,
      });
    }
    try {
      const coupon = await Coupon.findByOrFail(params.id);
      if (coupon) {
        coupon.merge({
          title: data.title,
          description: data.description,
          off: data.off,
          type: data.type,
          duration: data.duration,
          service_type_id: data.service_type_id,
          partner_service_id: data.partner_service_id,
        });
        await coupon.save();

        return response.send(coupon);
      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao atualizar cupom!' + error,
      });
    }
  }

  async destroy({ params, response }) {
    try {
      const coupon = await Coupon.findOrFail(params.id);
      if (coupon) {
        await coupon.delete();
        return response.status(200);
      } else {
        return response.status(404).send({
          success: false,
          message: 'Erro ao deletar cupom! Cupom não encontrado!',
        });
      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao deletar cupom!' + error,
      });
    }
  }

  async pauseCoupon({ params, response }) {
    try {
      const coupon = await Coupon.findOrFail(params.id);
      if (coupon) {
        const expire_date = new Date(coupon.$attributes.expire_at);
        const now = new Date();
        const timeLeft = expire_date - now;
        coupon.merge({
          status: 'paused',
          time_left: timeLeft,
        });
        await coupon.save();
        return response.status(200).send(coupon);
      } else {
        return response.status(404).send({
          success: false,
          message: 'Erro ao deletar cupom! Cupom não encontrado!',
        });
      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao deletar cupom!' + error,
      });
    }
  }

  async reactivateCoupon({ params, response }) {
    console.log('test');
    try {
      const coupon = await Coupon.findOrFail(params.id);
      if (coupon) {
        const now = new Date();
        const timeLeft = new Date(coupon.$attributes.time_left);
        console.log(timeLeft);
        const expire_at = moment(now).add(coupon.$attributes.time_left);
        coupon.merge({
          status: 'active',
          time_left: 0,
          expire_at: moment(expire_at).format('YYYY-MM-DD HH:mm:ss'),
        });
        await coupon.save();
        return response.status(200).send(coupon);
      } else {
        return response.status(404).send({
          success: false,
          message: 'Erro ao deletar cupom! Cupom não encontrado!',
        });
      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao deletar cupom!' + error,
      });
    }
  }

  async send({ auth, params, response }) {
    try {
      const user = await auth.user;
      const partner = await Partner.findByOrFail('user_id', user.id);
      const coupon = await Coupon.query().where('id', params.id).firstOrFail();
      if (coupon) {
        const customers = await partner.customers().with('user').fetch();
        //TODO - Envio de notificações aos customers e no raio determinado
        return response.status(200).send({
          success: true,
          message: 'Cupon enviado com sucesso!',
        });
      } else {
        return response.status(404).send({
          success: false,
          message: 'Cupon não encontrado!',
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

module.exports = CouponController;
