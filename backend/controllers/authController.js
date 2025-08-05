const User = require('../models/User');
const sendEmail = require('../utils/sendEmail'); // Make sure this exists
const crypto = require('crypto');
const bcrypt = require('bcryptjs');

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10); // Hash password
    const otp = Math.floor(100000 + Math.random() * 900000);
    const user = new User({ name, email, password: hashedPassword, otp });
    await user.save();

    await sendEmail(email, 'Your OTP Code', `Your OTP is ${otp}`);
    res.status(200).json({ success: true, message: 'OTP sent to your email' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
