const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res) => {
  res.send({ type: 'GET' });
});

router.post('/users', (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((error) => {
      res.status(400);
      res.send(error);
    });
});

router.put('/users/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

router.delete('/users/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;