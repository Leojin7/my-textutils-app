const express = require('express');
const app = express();
const port = 4000;

const connectToMongo = require('./db');
connectToMongo();

// Middleware to parse JSON bodies (critical for validation to work)
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
