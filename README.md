# WebApp — Full Stack Authentication Learning Project

## Description
WebApp is a minimal full-stack learning project that demonstrates an end-to-end authentication flow using static frontend pages, an Express backend, and PostgreSQL. Its purpose is educational: understanding how UI, server routes, sessions, and database-backed password verification work together.

## Features
- Login and logout functionality
- Session-based authentication with `express-session`
- Protected route access (`/welcome`)
- PostgreSQL integration via `pg`
- Password hashing and verification with `bcrypt`
- Environment-based configuration using `.env`
- GitHub Actions workflow configuration in `.github/workflows/deploy.yml`

## Tech Stack
- Frontend: HTML5, CSS3 (static files in `public/`)
- Backend: Node.js, Express.js
- Database: PostgreSQL
- Tools: npm, dotenv, pgAdmin (local DB management), GitHub Actions

## Project Structure
```text
webapp/
├─ .github/
│  └─ workflows/
│     └─ deploy.yml
├─ public/
│  ├─ login.html
│  ├─ welcome.html
│  └─ styles.css
├─ src/
│  ├─ db.js
│  ├─ server.js
│  ├─ middleware/
│  │  └─ requireAuth.js
│  └─ routes/
│     ├─ auth.js
│     ├─ db.js
│     └─ pages.js
├─ sql/
│  └─ init.sql
├─ package.json
└─ package-lock.json
```

## Setup Instructions (Local Development)
1. Clone the repository:
```bash
git clone <your-repo-url>
cd webapp
```

2. Install dependencies:
```bash
npm install
```

3. Create a local environment file from the example:
```bash
cp .env.example .env
```

4. Configure database credentials in `.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=webapp_db
DB_USER=your_db_user
DB_PASSWORD=your_db_password
```

5. Create the PostgreSQL database (for example with `psql`):
```sql
CREATE DATABASE webapp_db;
```

6. Start the server:
```bash
npm start
```

7. Open the app in your browser:
```text
http://localhost:3000/login
```

## Environment Variables
Required variables:
- `DB_HOST`
- `DB_PORT`
- `DB_NAME`
- `DB_USER`
- `DB_PASSWORD`

The `.env` file is for local secrets and is not committed to source control.

## Authentication Demo Users
Use these test accounts for login:
- `asia@gmail.com` / `12345`
- `shafeahmed@uvic.ca` / `0123456789`

Passwords are stored in the database as bcrypt hashes, not plaintext.

## API / Routes Overview
- `GET /login` — login page
- `GET /welcome` — protected welcome page
- `POST /auth/login` — process login form
- `POST /auth/logout` — destroy session and log out
- `GET /db/health` — database health check (`ok: true/false`)

## CI Workflow
This project includes a GitHub Actions workflow:
- Workflow file: `.github/workflows/deploy.yml`
- Purpose: automated CI/deployment pipeline configuration for repository events

## Versioning
This project follows Semantic Versioning.

Current release:
- `v0.1.0` — First functional authentication system.

## Future Improvements (Roadmap)
- AWS deployment target refinement for production
- Persistent session storage (e.g., Redis/PostgreSQL-backed sessions)
- User registration flow
- HTTPS configuration
