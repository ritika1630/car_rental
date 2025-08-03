const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', authMiddleware, (req, res) => {
  const { name, email } = req.user;
  res.status(200).json({ user: { name, email } });
});

module.exports = router;
