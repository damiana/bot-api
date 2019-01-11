const { responseJson, responseErrorJson} = require('../utils/controllers');

const servicoBots = require('../services/bots')

function teste(req, res) {
    return servicoBots.teste(req)
      .then(texto => responseJson(res, {
        mensagem: texto
      }))
      .catch((err) => responseErrorJson(res, 'serviceBots:teste', err));
}

function getBotId(req, res) {
    console.log('Request Id:', req.params.id);
    return Promise.resolve(responseJson(res, {
      texto: 'id passado: ' + req.params.id
    }));
  }

  module.exports = {
    teste,
    getBotId
  };