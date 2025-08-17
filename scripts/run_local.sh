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
npx update-browserslist-db@latest --force

# ----------------------------
# 2. Rebuild Tailwind CSS
# ----------------------------
echo "🎨 Rebuilding Tailwind CSS..."
npx tailwindcss -i ./src/input.css -o ./app/static/css/tailwind.css --minify

# ----------------------------
# 3. Install Python dependencies if missing
# ----------------------------
if ! python -c "import flask" &> /dev/null; then
    echo "📦 Installing Python dependencies..."
    pip install flask
fi

# ----------------------------
# 4. Free port if needed
# ----------------------------
if lsof -i :$PORT &> /dev/null; then
    echo "⚠️ Port $PORT is in use. Attempting to free it..."
    # kill all processes on the port in one go
    sudo fuser -k $PORT/tcp
    echo "✅ Port $PORT should now be free."
fi


# ----------------------------
# 5. Start Flask server
# ----------------------------
export FLASK_APP=app/app.py
export FLASK_ENV=development
echo "🚀 Starting Flask development server at http://127.0.0.1:$PORT ..."
flask run --host=127.0.0.1 --port=$PORT
