const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
  res.send({ type: 'GET' });
});

router.post('/users', (req, res) => {
  res.send({ type: 'POST' });
});

router.put('/users/:id', (req, res) => {
  res.send({ type: 'PUT' });
});

router.delete('/users/:id', (req, res) => {
  res.send({ type: 'DELETE' });
});

module.exports = router;