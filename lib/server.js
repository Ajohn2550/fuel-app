const express = require('express');

const bodyParser = require('body-parser');
const config = require('config');

const port = config.get('express.port');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.listen(port, () => {
  console.log('Server listening on: ' + port);
});

app.get('/', (req, res) => {
  res.status(200).send({});
});

app.use('/api', require('./fuelRoute'));

module.exports = app;
