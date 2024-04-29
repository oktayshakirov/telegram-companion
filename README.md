# Telegram Companion

## Setup and run

### Env

#### Server

FRONTEND_URL=http://localhost:3000
PORT=3000
DIST=../../dist

#### Client

VITE_BACKEND_URL=http://localhost:3000/fake
VITE_GOOGLE_CLIENT_ID=
VITE_PATREON_CLIENT_ID=

### Dev

Copy .env into .env.local and set VITE_BACKEND_URL="http://localhost:3000/fake"

```bash
yarn install
yarn dev
```

### Prod

```bash
yarn install
yarn build --mode production
yarn start
```
