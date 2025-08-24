const express = require('express');
const cors = require('cors');  // Import cors
const app = express();
const port = 4000;

// Try to connect to MongoDB, but don't fail if it's not available
const connectToMongo = require('./db');
connectToMongo().catch(err => {
  console.log('MongoDB connection failed, but server will continue:', err.message);
});

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON bodies (critical for validation to work)
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!', timestamp: new Date().toISOString() });
});

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`I-Notebook backend listening on port ${port}`);
  console.log(`Server started successfully at http://localhost:${port}`);
  console.log(`Test endpoint: http://localhost:${port}/api/test`);
});
