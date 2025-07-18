const mongoose = require('mongoose');
const express = require('express');
const app = express();
const User = require('./models/User');

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI; // 🔐 Use environment variable

// Middleware (optional but useful)
app.use(express.json()); // If you plan to receive JSON in requests

// MongoDB connection
async function mong_connect() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ Mongoose connected successfully!');
  } catch (err) {
    console.error(`❌ Mongo Error: ${err.message}`);
  }
}

mong_connect();

// Routes
app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); // Fetch all users
    res.json(users); // Send as JSON
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
