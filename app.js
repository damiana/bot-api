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
