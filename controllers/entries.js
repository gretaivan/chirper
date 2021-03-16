const express = require('express');
const router = express.Router();

const Entry = require('../models/entry');

router.post('/', (req, res) => {
  const data = req.body;
  const newEntry = Entry.create(data);
  res.status(201).send(newEntry);
});

router.get('/', (req, res) => {
  const allEntries = Entry.all;
  res.send(allEntries);
});

router.post('/reaction', (req, res) => {
  const data = req.body;
  Entry.addReaction(parseInt(data.id), data.reaction);
  res.send('done');
});

module.exports = router;
