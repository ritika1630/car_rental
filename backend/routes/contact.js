// routes/contact.js
const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const newMessage = new Message({
      name,
      email,
      message
    });

    await newMessage.save();
    res.status(200).json({ message: 'Your message has been sent successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Something went wrong, please try again later.' });
  }
});

module.exports = router;
