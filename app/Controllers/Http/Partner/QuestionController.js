'use strict'
const Question = use('App/Models/Question');
const QuestionType = use('App/Models/QuestionType');
const { manage_single_upload } = use('App/Helpers');
const Image = use('App/Models/Image');

class QuestionController {
  async index ({ request, response, view }) {
    const types = await QuestionType.all()
    return response.send({types})
  }

  async store ({ request, response, auth }) {
    const user = await auth.user
    const {question_type_id, description} = request.all();
    const fileJar = request.file('file', {
      types: ['image', 'pdf'],
      size: '2mb',
    });
    var file;
    if (fileJar) {
      const fileU = await manage_single_upload(fileJar);
      if (fileU.moved()) {
        file = await Image.create({
          path: fileU.fileName,
          size: fileU.size,
          original_name: fileU.clientName,
          extension: fileU.subtype,
        });
      }
    }
    const question = await Question.create({
      user_id: user.id,
      question_type_id,
      description,
      status: 'open',
      origin: 'partner',
      file_id: file ? file.id : null,
    })
    return response.status(200).send({
      success: true,
      message: 'Mensagem enviada com sucesso!',
    });
  }
}

module.exports = QuestionController
