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
  res.status(200).send(allEntries);
});

module.exports = router;
