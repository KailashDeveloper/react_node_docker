const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Route to get all countries
router.get('/country', (req, res) => {
  const query = 'SELECT * FROM country c LEFT JOIN continent cn ON cn.continent_name = c.region;';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching countries:', err);
      return res.status(500).json({ error: 'Failed to fetch countries' });
    }
    res.json(results);
  });
});

module.exports = router;
