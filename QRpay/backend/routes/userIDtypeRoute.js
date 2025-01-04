const express = require('express');
const connection = require('../config/db'); // Adjust the path as per your project structure
const router = express.Router();

// API endpoint to get all user ID types
router.get('/user-id-types', (req, res) => {
  const query = 'SELECT user_IDtype_name FROM user_IDtype_table';
  connection.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database query failed' });
    }
    res.json(results);
  });
});

module.exports = router;
