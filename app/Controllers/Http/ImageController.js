'use strict';

const Image = use('App/Models/Image');

class ImageController {
  async show({ response, params, transform }) {
    const image = await Image.findOrFail(params.id);
    return response.send(image);
  }
}

module.exports = ImageController;
