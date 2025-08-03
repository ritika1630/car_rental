require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/carRentalDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch(err => {
  console.error('❌ MongoDB connection error:', err);
});

// Routes
const authRoutes = require('./routes/authRoutes');
const carRoutes = require('./routes/car');
const contactRoutes = require('./routes/contact');
const bookingRoutes = require('./routes/bookingRoutes');
const Car = require('./models/Car');
const profileRoute = require('./routes/profile');

app.use('/api/profile', profileRoute);
app.use('/api/auth', authRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/bookings', bookingRoutes);

// Populate Database
app.post('/api/populate', async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync('./cars.json', 'utf8'));
    const cars = await Car.insertMany(data);
    res.status(201).json({ message: 'Database populated', cars });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`🚗 Server running at http://localhost:${PORT}`);
});
