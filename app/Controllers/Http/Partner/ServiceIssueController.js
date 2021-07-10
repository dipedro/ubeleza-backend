'use strict'
const ServiceIssue = use('App/Models/ServiceIssue');
const ServiceIssueType = use('App/Models/ServiceIssueType');
const { manage_single_upload } = use('App/Helpers');
const Image = use('App/Models/Image');

class ServiceIssueController {
  async index ({ request, response, view }) {
    const types = await ServiceIssueType.all()
    return response.send({types})
  }

  async store ({ request, response }) {
    const {service_request_id, service_issue_type_id, description} = request.all();
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
    const issue = await ServiceIssue.create({
      service_request_id,
      service_issue_type_id,
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

module.exports = ServiceIssueController
