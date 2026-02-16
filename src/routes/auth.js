const express = require('express');

const router = express.Router();

const DEMO_EMAIL = 'asia@gmail.com';
const DEMO_PASSWORD = '2024-12-04';

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === DEMO_EMAIL && password === DEMO_PASSWORD) {
    req.session.user = { email };
    return res.redirect('/welcome');
  }

  return res.redirect('/login?error=1');
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;
