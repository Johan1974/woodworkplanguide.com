# ===========================
# Base image
# ===========================
FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

LABEL project="nginx-central"

WORKDIR /app

# ===========================
# Install system deps + Node (for Tailwind)
# ===========================
RUN apt-get update && apt-get install -y --no-install-recommends \
        build-essential curl gnupg \
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && rm -rf /var/lib/apt/lists/*

# ===========================
# Node packages
# ===========================
COPY package*.json ./
RUN npm install

# ===========================
# Python dependencies
# ===========================
COPY requirements.txt ./
RUN pip install -r requirements.txt

# ===========================
# Application code
# ===========================
COPY app ./app
COPY src ./src
COPY tailwind.config.js ./tailwind.config.js
COPY postcss.config.js ./postcss.config.js

# ===========================
# Build Tailwind CSS
# ===========================
RUN npx tailwindcss -i ./src/input.css -o ./app/static/css/tailwind.css --minify

# ===========================
# Create non-root user
# ===========================
RUN useradd -m appuser
USER appuser

EXPOSE 8000

# ===========================
# Gunicorn with factory
# ===========================
# Not supported and causes errors:
# CMD ["gunicorn", "--factory", "app.app:create_app"]

# Correct: invoke the factory with a function call:
CMD ["gunicorn", "-w", "3", "-b", "0.0.0.0:8000", "app.app:create_app()"]


# CMD ["gunicorn", "-w", "3", "-b", "0.0.0.0:8000", "--factory", "app.app:create_app"]
