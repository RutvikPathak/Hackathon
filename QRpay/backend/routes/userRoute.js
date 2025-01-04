const express = require('express');
const db = require('../dbConnection');

const router = express.Router();

// Route to register a new user
router.post('/api/register', (req, res) => {
  const { username, email, phone, idType, uniqueId, password } = req.body;

  const query = `
    INSERT INTO users_table (user_name, user_email, user_phone, user_IDtype, unique_id, user_password)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [username, email, phone, idType, uniqueId, password],
    (err, results) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).json({ error: 'Failed to register user' });
      } else {
        res.status(201).json({ message: 'User registered successfully' });
      }
    }
  );
});

module.exports = router;
