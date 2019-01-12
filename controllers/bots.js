const { responseJson, responseErrorJson} = require('../utils/controllers');

const serviceBots = require('../services/bots')

function findAll(req, res) {
    return serviceBots.getAll()
      .then(records => responseJson(res, {
        records: records
      }))
      .catch((err) => responseErrorJson(res, 'serviceBots:getAll', err));
};

function findOne(req, res) {
    return serviceBots.getOne(req)
      .then(record => responseJson(res, {
        record: record
      }))
      .catch((err) => responseErrorJson(res, 'serviceBots:getOne', err));
};

function insert(req, res) {
    return serviceBots.insert(req)
      .then(record => responseJson(res, {
        record: record
      }))
      .catch((err) => responseErrorJson(res, 'serviceBots:insert', err));
};

function update(req, res) {
    return serviceBots.update(req)
      .then(record => responseJson(res, {
        record: record
      }))
      .catch((err) => responseErrorJson(res, 'serviceBots:update', err));
};

function deleteOne(req, res) {
    return serviceBots.deleteOne(req)
      .then(record => responseJson(res, {
        record: record
      }))
      .catch((err) => responseErrorJson(res, 'serviceBots:delete', err));
};

  module.exports = {
    findAll,
    insert,
    findOne,
    update,
    deleteOne
  };