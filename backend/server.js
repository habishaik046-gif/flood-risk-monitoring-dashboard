const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Body parser & CORS
app.use(cors());
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.json({ message: 'Flood Risk Intelligence REST API is running' });
});
// Register API Routes
app.use('/api/locations', require('./routes/locationRoutes'));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});