// backend/routes/userIDtypeRoute.js
const express = require('express');
const mysql = require('mysql2');
const router = express.Router();

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: 'root', 
  database: 'user_records_db',
});

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
