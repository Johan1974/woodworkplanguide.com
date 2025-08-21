#!/bin/bash

# ============================================
# WoodworkPlanGuide: Run Local (Conda assumed active)
# ============================================

ENV_NAME="woodwork_env"
PORT=8086

# ----------------------------
# 0. Check Conda environment
# ----------------------------
if [ "$CONDA_DEFAULT_ENV" != "$ENV_NAME" ]; then
    echo "❌ Error: You are not in the '$ENV_NAME' Conda environment."
    echo "❌ Please activate it with: conda activate $ENV_NAME"
    exit 1
fi

echo "🚀 Starting local WoodworkPlanGuide..."

# ----------------------------
# 1. Update Browserslist DB
# ----------------------------
echo "🌐 Updating Browserslist database..."
npx update-browserslist-db@latest --force || true

# ----------------------------
# 2. Start Tailwind watcher in background
# ----------------------------
echo "🎨 Starting Tailwind in watch mode..."
npx tailwindcss -i ./src/input.css -o ./app/static/css/tailwind.css --watch &
TAILWIND_PID=$!

# ----------------------------
# 3. Install Python dependencies if missing
# ----------------------------
for pkg in flask livereload bleach; do
    if ! python -c "import $pkg" &> /dev/null; then
        echo "📦 Installing $pkg..."
        pip install $pkg
    fi
done

# ----------------------------
# 4. Free port if needed
# ----------------------------
if lsof -i :$PORT &> /dev/null; then
    echo "⚠️ Port $PORT is in use. Freeing it..."
    sudo fuser -k $PORT/tcp
fi

# ----------------------------
# 5. Start Flask + LiveReload
# ----------------------------
export FLASK_APP="app.app"
export FLASK_ENV=development
echo "🚀 Starting Flask development server with LiveReload on http://127.0.0.1:$PORT ..."

python - <<EOF
from livereload import Server
from app.app import app

import logging
logging.getLogger('livereload').setLevel(logging.WARNING)
logging.getLogger('tornado.access').setLevel(logging.WARNING)
logging.getLogger('tornado.general').setLevel(logging.WARNING)


print ("test")

server = Server(app.wsgi_app)
# Watch all app files recursively
server.watch('app/templates', delay=10)  
server.watch('app/static', delay=10)  
server.serve(port=$PORT, host='127.0.0.1', debug=True)
EOF

# ----------------------------
# 6. Cleanup Tailwind watcher on exit
# ----------------------------
kill $TAILWIND_PID
