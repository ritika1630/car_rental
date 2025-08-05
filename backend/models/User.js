const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Define user schema
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  otp: String,
  otpExpires: Date,
  isVerified: { type: Boolean, default: false },
});

// Hash password before saving
// UserSchema.pre('save', async function (next) {
//   if (!this.isModified('password')) return next();  // Only hash if password is modified
//   this.password = await bcrypt.hash(this.password, 10);  // Hash password with salt rounds of 10
//   next();
// });

// Check if the model already exists and use it, or define a new one
let User;
try {
  User = mongoose.model('User');
} catch (error) {
  User = mongoose.model('User', UserSchema);
}

module.exports = User;
