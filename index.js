const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes/api');

const app = express();

mongoose.connect('mongodb://localhost/restapi-demo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', router);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App running on ${port}`);
});