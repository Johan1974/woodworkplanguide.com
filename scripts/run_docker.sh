#!/bin/bash

# ============================================
# WoodworkPlanGuide: Full Rebuild & Deploy
# ============================================

PROJECT_NAME="woodworkplanguide"

echo "🚀 Fully rebuilding $PROJECT_NAME stack..."

# ----------------------------
# 1. Update Browserslist DB (avoid outdated warnings)
# ----------------------------
echo "🌐 Updating Browserslist database..."
npx update-browserslist-db@latest --force

# ----------------------------
# 2. Rebuild Tailwind CSS (always fresh)
# ----------------------------
echo "🎨 Rebuilding Tailwind CSS..."
npx tailwindcss -i ./src/input.css -o ./app/static/css/tailwind.css --minify

# ----------------------------
# 2.1 Verify Tailwind CSS build
# ----------------------------
if [ ! -s ./app/static/css/tailwind.css ]; then
    echo "❌ ERROR: Tailwind CSS did not build correctly."
    echo "👉 Fix this by making sure Tailwind is installed:"
    echo "   npm install -D tailwindcss postcss autoprefixer"
    echo "👉 Or run manually: npx tailwindcss -i ./src/input.css -o ./app/static/css/tailwind.css --minify"
    exit 1
fi
echo "✅ Tailwind CSS built successfully."

# ----------------------------
# 3. Stop and remove all containers
# ----------------------------
echo "🛑 Stopping and removing containers..."
docker ps -a --format "{{.Names}}" | grep "$PROJECT_NAME" | while read -r container; do
    echo "Stopping container: $container"
    docker stop "$container" >/dev/null 2>&1
    echo "Removing container: $container"
    docker rm "$container" >/dev/null 2>&1
done

# ----------------------------
# 4. Remove all images, volumes, networks, orphans
# ----------------------------
echo "🧹 Removing all images, volumes, networks..."
docker compose -p "$PROJECT_NAME" down --rmi all -v --remove-orphans
docker image prune -af
docker volume prune -f
docker network prune -f

# ----------------------------
# 5. Build & start fresh
# ----------------------------
echo "🔨 Building and starting fresh Docker stack..."
docker compose -p "$PROJECT_NAME" up --build --force-recreate -d

echo "✅ Done. Nginx is serving on port 85. Full rebuild complete."
