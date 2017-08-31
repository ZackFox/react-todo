const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(
  'mongodb://mdbadmin:mdbpass@ds155132.mlab.com:55132/mongobase',
  { useMongoClient: true, poolSize: 4 },
  () => console.log('connection success!')
);

app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/v1', routes);

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(5000, () => {
  console.log('start');
});
