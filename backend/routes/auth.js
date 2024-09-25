const express = require('express');
const router = express.Router();

// Dummy user data (replace with real DB queries)
const users = [
  { email: 'user@example.com', password: 'password123' }
];

// Login Route
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  
  if (user) {
    return res.json({ success: true, message: 'Login successful!' });
  } else {
    return res.json({ success: false, message: 'Invalid credentials' });
  }
});

// Signup Route
router.post('/signup', (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  // In a real app, you'd save this data to your database.
  users.push({ email, password });
  return res.json({ success: true, message: 'Signup successful!' });
});

module.exports = router;
