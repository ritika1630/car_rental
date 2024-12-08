require('dotenv').config(); // Load environment variables
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const contactRoute = require('./routes/contact');
const bookingRoutes = require('./routes/bookingRoutes');
const User = require('./models/User'); // Moved to the top for consistency
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Middleware
app.use(cors({ origin: 'http://localhost:5173' })); // Adjust for your frontend
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/carRentalDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

// Models
const carSchema = new mongoose.Schema({
  id: Number,
  model: String,
  year: Number,
  image: String,
  price: Number,
  details: String,
});
const Car = mongoose.model('Car', carSchema);

// Routes
app.use('/api', contactRoute);
app.use('/api/bookings', bookingRoutes);

// Populate Database Route
app.post('/api/populate', async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('./cars.json', 'utf8'));
    const cars = await Car.insertMany(data);
    res.status(201).json({ message: 'Database populated', cars });
  } catch (error) {
    console.error('Error populating database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get All Cars Route
app.get('/api/cars', async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    console.error('Error fetching cars:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Register User Route
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login User Route
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ 
      token, 
      user: { id: user._id, name: user.name, email: user.email } 
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Profile Route - Get User Profile Data
app.get('/api/profile', authMiddleware, async (req, res) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  console.log("Received Token:", token);

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(decoded.id).select('-password'); // Exclude password from profile data
    console.log("Decoded Token:", decoded);
    console.log("Fetched User:", user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ user: { id: user._id, name: user.name, email: user.email } });
  } catch (err) {
    console.error("Error in /api/profile route:", err);
    res.status(401).json({ message: 'Invalid token' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
