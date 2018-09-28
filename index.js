const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const router = require('./routes/api');

const app = express();

mongoose.connect('mongodb://localhost/restapi-demo', {
  useNewUrlParser: true
});
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

app.use('/api', router);

app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App running on ${port}`);
});