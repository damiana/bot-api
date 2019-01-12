'use strict';
const HttpStatus = require('http-status-codes');
const uuidv1 = require('uuid/v1');

function responseJson(res, data, code = HttpStatus.OK) {
  res.status(code);
  return res.json(data);
}

function responseErrorJson(res, methodName, error, code = HttpStatus.INTERNAL_SERVER_ERROR) {
  res.status(error.httpCode || code);
  return res.json({
    error: error.message || error.toString()
  });
}

function generateUUIDV() {
  //formated: '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
  return uuidv1();
}


module.exports = exports = {
  responseJson,
  responseErrorJson,
  generateUUIDV
};
