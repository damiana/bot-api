const { responseJson, responseErrorJson} = require('../utils/controllers');

const serviceMessages = require('../services/messages')


function findAll(req, res) {
    return serviceMessages.getAll(req)
      .then(records => responseJson(res, {
        record: records
      }))
      .catch((err) => responseErrorJson(res, 'serviceMessages:getAll', err));
};

function findOne(req, res) {
    return serviceMessages.getOne(req)
      .then(record => responseJson(res, {
        record: record
      }))
      .catch((err) => responseErrorJson(res, 'serviceMessages:getOne', err));
};

function insert(req, res) {
    return serviceMessages.insert(req)
      .then(record => responseJson(res, {
        record: record
      }))
      .catch((err) => responseErrorJson(res, 'serviceMessages:insert', err));
};

module.exports = {
    findAll,
    findOne,
    insert
  };
