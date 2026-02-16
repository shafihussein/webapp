const express = require('express');
const bcrypt = require('bcrypt');
const pool = require('../db');

const router = express.Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body || {};

    if (
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      email.trim() === '' ||
      password.trim() === ''
    ) {
      return res.redirect('/login?error=1');
    }

    const result = await pool.query(
      `
      SELECT id, email, password_hash
      FROM public.users
      WHERE email = $1
      LIMIT 1;
      `,
      [email.trim()]
    );

    if (result.rows.length === 0) {
      return res.redirect('/login?error=1');
    }

    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password_hash);

    if (!isValid) {
      return res.redirect('/login?error=1');
    }

    req.session.user = { id: user.id, email: user.email };
    return res.redirect('/welcome');
  } catch (error) {
    return res.redirect('/login?error=1');
  }
});

router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/login');
  });
});

module.exports = router;
