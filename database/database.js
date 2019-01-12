const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017')
        .then(conn => global.conn = conn.db('botapi'))
        .catch(err => console.log(err));
 
        
function findAll(callback) {  
    global.conn.collection('bots').find({}).toArray(callback);
};

function findOne(id, callback){
    global.conn.collection('bots').find({'id': id}).toArray(callback);
};

function insert(bot, callback){
    global.conn.collection('bots').insert(bot, callback);
};

function updateOne(id, name, callback){
    global.conn.collection('bots').updateOne({'id': id}, { $set: {'name': name} },{ upsert: true }, callback);
};

function deleteOne(id, callback){
    global.conn.collection('bots').deleteOne({'id': id}, callback);
}

//APIs Messages
function findAllMessage(callback) {  
    global.conn.collection('messages').find({}).toArray(callback);
};

function findOneMessage(id, callback){
    global.conn.collection('messages').find({'id': id}).toArray(callback);
};

function insertMessage(messages, callback){
    global.conn.collection('messages').insert(messages, callback);
};


module.exports = {
    findAll,
    insert,
    findOne,
    updateOne,
    deleteOne,
    findAllMessage,
    findOneMessage,
    insertMessage
};