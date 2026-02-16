const express = require('express');
const path = require('path');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();
const publicDir = path.join(__dirname, '..', '..', 'public');

router.get('/login', (req, res) => {
  if (req.session && req.session.user) {
    return res.redirect('/welcome');
  }

  return res.sendFile(path.join(publicDir, 'login.html'));
});

router.get('/welcome', requireAuth, (req, res) => {
  res.sendFile(path.join(publicDir, 'welcome.html'));
});

module.exports = router;
