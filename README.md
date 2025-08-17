# Woodwork Plan Guide (Flask)
Ready-to-deploy marketing/affiliate landing site powered by Flask and Nginx.

## Quickstart
1. Copy `.env.example` to `.env` and edit values.
2. Build and run:
   ```bash
   docker compose up -d --build
   ```
3. Visit: `http://YOUR_SERVER_IP/`

## TLS (HTTPS)
Put this stack behind a reverse proxy like Caddy, Traefik, or an Nginx with Let's Encrypt on the host.
