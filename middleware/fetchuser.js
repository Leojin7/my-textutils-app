const jwt = require('jsonwebtoken');
const JWT_SECRET = 'devisagoodboy'; // Make sure this matches your secret

const fetchuser = (req, res, next) => {
  // Get token from Authorization header (Bearer token)
  const authHeader = req.header('Authorization');
  if (!authHeader) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).send({ error: "Please authenticate using a valid token" });
  }

  try {
    // Verify token and get payload
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token" });
  }
};

module.exports = fetchuser;
