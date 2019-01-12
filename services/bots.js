const util = require("../utils/controllers");
const database = require('../database/database');

function getAll() {
    return new Promise((resolve, reject) => {
        try {
            database.findAll((e, docs) => {
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
            // console.log('request id int: ' + parseInt( id, 10));

            database.findOne(id, (e, docs) => {
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
            let id = util.generateUUIDV();
            let name = req.body.name;
            console.log('name: ' + name);
            database.insert({id, name}, (err, result) => {
                if(err) { return console.log(err); }
                resolve(result);
            })
        } catch(err){
            console.log('Error insert record: ' + err);
            reject('Error insert record: ' + err);
        }
    });   
}

function update(req) {
    return new Promise((resolve, reject) => {
        try {
            let id = req.body.id;
            let name = req.body.name;
            console.log('id: ' + id);
            console.log('name: ' + name);
            database.updateOne(id, name, (err, result) => {
                if(err) { return console.log(err); }
                resolve(result);
            })
        } catch(err){
            console.log('Error update record: ' + err);
            reject('Error update record: ' + err);
        }
    });
}


function deleteOne(req) {
    return new Promise((resolve, reject) => {
        try {
            let id = req.body.id;
            console.log('id: ' + id);
            database.deleteOne(id, (err, result) => {
                if(err) { return console.log(err); }
                resolve(result);
            })
        } catch(err){
            console.log('Error delete record: ' + err);
            reject('Error delete record: ' + err);
        }
    });
}

module.exports = {
    getAll,
    insert,
    getOne,
    update,
    deleteOne
  };