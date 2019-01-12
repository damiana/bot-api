const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017')
        .then(conn => global.conn = conn.db('botapi'))
        .catch(err => console.log(err));
 
        
function findAll(callback) {  
    global.conn.collection('bots').find({}).toArray(callback);
};

function insert(bot, callback){
    global.conn.collection('bots').insert(bot, callback);
};

function findOne(id, callback){
    global.conn.collection('bots').find({'id': id}).toArray(callback);
};

function updateOne(id, name, callback){
    global.conn.collection('bots').updateOne({'id': id}, { $set: {'name': name} },{ upsert: true }, callback);
};

function deleteOne(id, callback){
    global.conn.collection('bots').deleteOne({'id': id}, callback);
}

module.exports = {
    findAll,
    insert,
    findOne,
    updateOne,
    deleteOne
};