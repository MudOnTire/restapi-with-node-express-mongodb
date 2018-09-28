const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', (req, res, next) => {
  User.find(req.query)
    .then((users) => {
      res.send(users);
    })
    .catch(next);
});

router.post('/users', (req, res, next) => {
  User.create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch(next);
});

router.put('/users/:id', (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndUpdate(id, req.body)
    .then(() => {
      User.findById(id)
        .then((user) => {
          res.send(user);
        })
        .catch(next);
    })
    .catch(next);
});

router.delete('/users/:id', (req, res, next) => {
  const id = req.params.id;
  User.findByIdAndRemove(id)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(next);
});

module.exports = router;