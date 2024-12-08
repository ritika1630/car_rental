const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

const authMiddleware = async (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    // Log decoded token to check if it's valid
    console.log("Decoded Token:", decoded);

    // Look up the user by the ID decoded from the token
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Attach the user to the request object
    req.user = user;

    // Log user to confirm it's being added to the request
    console.log("User attached to request:", req.user);

    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error("JWT Error:", error);
    return res.status(401).json({ error: 'Invalid or expired token' });
  }
};

module.exports = authMiddleware;
