'use strict';

const { getAvg } = require("@adonisjs/lucid/src/Lucid/Model");
const { manage_single_upload } = require("../../../Helpers");

const Database = use("Database");

const Partner = use('App/Models/Partner');

const User = use('App/Models/User');

const Image = use('App/Models/Image');
const { validate } = use('Validator');
class PartnerController {

  async index({ request, response, auth }) {
    try {
      var user = await auth.user;
      user = await User.query().with('image').where('id', user.id).first()
      const partner = await Partner.findByOrFail('user_id', user.id);
      var image = await user.image().fetch();
      var stars = await Database
      .table('ratings')
      .where('to', user.id)
      .where('type', 'to_partner')
      .limit(100)
      .getAvg('stars');
      if(stars == null) {
        stars = 0;
      };
      var res = {
        fullname: user.fullname,
        image: image,
        stars,
        views_count: await partner.received_visits,
        coments: await Database
          .select('feedback')
          .table('ratings')
          .where('to', user.id)
          .where('type', 'to_partner'),
        description: await partner.bio,
        certificates: await partner.certificates().fetch(),
        customers: await partner.customers().getCount(),
        serviceTypes: await partner.services().with('image').with('type').fetch(),
        photos: await partner.images().fetch(),
      }
      response.send({ res });
    } catch (error) {
      response.send(error);
    }
  }

  async store({ request, response }) {}

  async show({ params, request, response, view }) {}

  async update({ auth, request, response }) {
    var user = await auth.user;
    const {
      email,
      phone,
      fullname,
      exp_time,
      how_meet,
      legal_name,
      legal_document,
      bio,
      other_app,
      public_name,
      instagram,
      facebook,
    } = request.only([
      'fullname',
      'email',
      'phone',
      'exp_time',
      'how_meet',
      'legal_name',
      'legal_document',
      'bio',
      'other_app',
      'public_name',
      'instagram',
      'facebook',
    ]);
    const data = request.only([
      'fullname',
      'email',
      'phone',
      'exp_time',
      'how_meet',
      'legal_name',
      'legal_document',
      'bio',
      'other_app',
      'public_name',
      'instagram',
      'facebook',
    ]);
    const rules = {
      phone: `unique:${User.table},phone,id,${user.id}`,
      email: `unique:${User.table},email,id,${user.id}`,
    };
    const fileJar = request.file('user_photo', {
      types: ['image'],
      size: '2mb',
    });

    var image;
    if (fileJar) {
      const file = await manage_single_upload(fileJar);
      if (file.moved()) {
        image = await Image.create({
          path: file.fileName,
          size: file.size,
          original_name: file.clientName,
          extension: file.subtype,
        });
        await Database
          .table('users')
          .where('id', user.id)
          .update({ image_id: image.id });
      }
    }

    const messages = {
      'email.unique': 'Email já cadastrado.',
      'phone.unique': 'Telefone já cadastrado.',
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
      await Database
        .table('users')
        .where('id', user.id)
        .update({ email, phone, fullname });
      await user.partner().update({
        exp_time,
        how_meet,
        legal_name,
        legal_document,
        bio,
        other_app,
        public_name,
        instagram,
        facebook,
      });
    }
    catch {
      
    }
    user = await User.findOrFail(user.id);
    await user.load(['image']);
    await user.loadMany(['partner']);
    return user;
  }
  async postImage({request, response, auth}){
    const user = auth.user;
    const partner = await user.partner().fetch();
    const fileJar = request.file('images', {
      types: ['image'],
      size: '2mb',
    });
    if (fileJar) {
      const fileU = await manage_multiple_uploads(fileJar);
      if (fileU.errors.length == 0) {
        fileU.successes.map(async f => {
          let file = await Image.create({
            path: f.fileName,
            size: f.size,
            original_name: f.clientName,
            extension: f.subtype,
          });
          partner.images().attach([file.id]);
        })
      }
    }
  }
  async destroyImage({params, response, auth}){
    try {
      const user = await auth.user;
      const partner = await user.partner().fetch();
      const image = await Image
        .query()
        .where('id', params.id)
        .firstOrFail();
      if (image){
        await partner.images().detach([params.id]);
        image.delete();
        return response.status(200).send({
          success: true,
          message: 'Imagem removida com sucesso!',
        });
      } else {
        return response.status(404).send({
          success: false,
          message: 'Erro ao deletar imagem! Imagem não encontrada!',
        });
      }
    } catch (error) {
      return response.status(500).send({
        success: false,
        message: 'Erro ao deletar imagem!' + error,
      });
    }
  }
  async destroy({ params, request, response }) {}
}

module.exports = PartnerController;
