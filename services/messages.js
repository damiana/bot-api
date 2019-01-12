const util = require("../utils/controllers");
const database = require('../database/database');
const moment = require('moment');

function getAll() {
    return new Promise((resolve, reject) => {
        try {
            database.findAllMessage((e, docs) => {
                if (e) { return console.log(e); }
                resolve(docs);
            })
        } catch(err) {
            console.log('Error fetching records : ' + err);
            reject('Error fetching records: ' + err);
        }
    });
}

function getOne(req) {
    return new Promise((resolve, reject) => {
        try {
            let id = req.params.id;
            console.log('request id: ' + id);
            database.findOneMessage(id, (e, docs) => {
                if (e) { return console.log(e); }
                resolve(docs[0]);
            })
        } catch(err) {
            console.log('Error fetching record : ' + err);
            reject('Error fetching record: ' + err);
        }
    });
}

function insert(req) {
    return new Promise((resolve, reject) => {
        try {
            let m = {};
            m.id = util.generateUUIDV();
            m.conversationId = req.body.conversationId;
            m.from = req.body.from;
            m.to = req.body.to;
            m.text = req.body.text;
            m.timestamp = moment().format();

            database.insertMessage(m, (err, result) => {
                if(err) { return console.log(err); }
                resolve(result);
            })
        } catch(err){
            console.log('Error insert record: ' + err);
            reject('Error insert record: ' + err);
        }
    });   
}

module.exports = {
    getAll,
    getOne,
    insert
  };