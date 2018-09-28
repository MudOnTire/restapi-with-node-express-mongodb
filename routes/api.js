const express = require('express');
const router = express.Router();
const User = require('../models/user');
const { Province, City, University } = require('../models/university');
const metadata = require('../public/province-city-univercity');

router.post('/provinces', (req, res, next) => {
  Province.deleteMany({}, (err) => {
    if (!err) {
      Province.insertMany(metadata.province)
        .then(docs => {
          res.send(docs);
        })
        .catch(next);
    }
  });
});

router.post('/cities', (req, res, next) => {
  City.deleteMany({}, (err) => {
    if (!err) {
      City.insertMany(metadata.city)
        .then(docs => {
          res.send(docs);
        })
        .catch(next);
    }
  });
});

router.post('/universities', (req, res, next) => {
  University.deleteMany({}, (err) => {
    if (!err) {
      University.insertMany(metadata.university)
        .then(docs => {
          res.send(docs);
        })
        .catch(next);
    }
  });
});

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