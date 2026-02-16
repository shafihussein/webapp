const express = require('express');
const pool = require('../db');

const router = express.Router();

router.get('/health', async (req, res) => {
  try {
    await pool.query('SELECT 1 as ok');
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, error: 'db_unreachable' });
  }
});

module.exports = router;
