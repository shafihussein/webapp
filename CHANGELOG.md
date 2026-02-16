# Changelog

All notable changes to this project will be documented in this file.
This project follows [Semantic Versioning](https://semver.org/) and a [Keep a Changelog](https://keepachangelog.com/) style.

## [Unreleased]

## [v0.1.0] - 2026-02-16

### Added
- Initial local functional release of the `webapp` learning project.
- Static frontend pages in `/public`: `login.html`, `welcome.html`, and `styles.css`.
- Express static file serving for `/public` assets.
- Clean page routes:
  - `GET /login`
  - `GET /welcome` (protected)
- Session-based authentication flow:
  - `POST /auth/login`
  - `POST /auth/logout`
  - `requireAuth` middleware protecting `/welcome`
- Environment configuration via `.env` using `dotenv`.
- PostgreSQL connectivity through a reusable `pg` Pool.
- Database health endpoint:
  - `GET /db/health` returning `{ ok: true }` or `{ ok: false }`.
- Database-backed login using `public.users` with bcrypt password verification.

### Security
- Passwords are stored as bcrypt hashes (`password_hash`), not plaintext.
- `.env` is not committed to source control.
- `node_modules` is ignored from source control.

### Notes
- Sessions currently use the default in-memory store (development only).
- This release is local-only and intended for learning/development use.
- No AWS deployment is included in this version.
