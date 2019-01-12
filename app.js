const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Logging unhandled promises rejection
process.on('unhandledRejection', (reason, p) => {
  console.log('Possibly Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(`/`, require('./routes'));

app.listen(3000, () => {
 console.debug(`${app.name} listening on port 3000`);
});


// MongoClient.connect("mongodb://localhost:27017", function(err, database) {
//   if(!err) {

//     let db = database.db('botapi');
//     db.collection('bots', function (err, collection) {
        
//       collection.insert({ id: 1, name: 'Damiana'});
//       collection.insert({ id: 2, name: 'Maria'});
//       collection.insert({ id: 3, name: 'Jose'});

//       db.collection('bots').count(function (err, count) {
//           if (err) throw err;
          
//           console.log('Total Rows: ' + count);
//       });
//       database.close();
//     });

//     console.log("We are connected");
//   } else {
//     console.log("Error connected" + err);
//   }

// });
