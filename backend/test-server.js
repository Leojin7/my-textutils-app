const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

// Enable CORS for all routes
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend server is running!' });
});

// Basic auth routes without MongoDB
app.get('/api/auth/getuser', (req, res) => {
  res.json({ message: 'User endpoint working' });
});

app.get('/api/notes/fetchallnotes', (req, res) => {
  res.json({ notes: [], message: 'Notes endpoint working' });
});

app.listen(port, () => {
  console.log(`Test server listening on port ${port}`);
  console.log(`Server started successfully at http://localhost:${port}`);
});
