const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
  console.log(req.headers.authorization)
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, 'secret');
    req.userId = decoded.userId;

    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

const isAdmin = (req, res, next) => {
  const userId = req.userId;

  next();
};

module.exports = { authenticate, isAdmin };
