const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/api');

const app = express();

app.use(bodyParser.json());

app.use('/api', router);

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`App running on ${port}`);
});