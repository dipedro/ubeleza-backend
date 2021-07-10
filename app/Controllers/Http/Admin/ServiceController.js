'use strict'
const Service = use('App/Models/Service')


class ServiceController {
    async store({ request, response, auth }) {
        try {
          const user = await auth.user;
          const { name, description, service_type_id } = request.all();
          await Service.create({
            name,
            description,
            service_type_id,
            stars,
          });
          
            return response.status(200).send({
            success: true,
            message: 'Serviço criado com sucesso!',
          });
        } catch (error) {
          return response.status(500).send({
            success: false,
            message: 'Erro ao criar serviço! ' + error,
          });
        }
      }

}

module.exports = ServiceController
