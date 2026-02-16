const express = require('express');
const path = require('path');

const router = express.Router();
const publicDir = path.join(__dirname, '..', '..', 'public');

router.get('/login', (req, res) => {
  res.sendFile(path.join(publicDir, 'login.html'));
});

router.get('/welcome', (req, res) => {
  res.sendFile(path.join(publicDir, 'welcome.html'));
});

module.exports = router;
