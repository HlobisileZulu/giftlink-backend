routes/authRoutes.js

Paste:

const express = require('express');
const router = express.Router();
const connectToDatabase = require('../models/db');

router.post('/login', async (req, res) => {
  const db = await connectToDatabase();

  const collection = db.collection('users');

  const user = await collection.findOne({
    username: req.body.username
  });

  res.json(user);
});

module.exports = router;
