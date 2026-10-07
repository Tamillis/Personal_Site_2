#!/bin/bash
set -e

REQUIRED_SPACE_MB=150
TARGET_DIR="/home/gitbot/PersonalSite"

# PRE-FLIGHT DISK SPACE CHECK
# Grabs available space in MB on the root filesystem
AVAILABLE_SPACE_MB=$(df -m / | awk 'NR==2 {print $4}')

if [ "$AVAILABLE_SPACE_MB" -lt "$REQUIRED_SPACE_MB" ]; then
  echo "ERROR: ${AVAILABLE_SPACE_MB}MB available. ${REQUIRED_SPACE_MB}MB needed."
  exit 1
fi

# Clean out any previous run artifacts
echo "Removing files from $TARGET_DIR"
rm -rf "$TARGET_DIR"

echo "Cloning repository..."
git clone --depth 1 https://github.com/Tamillis/Personal_Site_2.git "$TARGET_DIR"

cd "$TARGET_DIR/personal_site"

echo "Installing npm packages..."
npm install --no-audit --no-fund

echo "Building wiki routes..."
python3 build-mewiki-routes.py

echo "Running Vite production build..."
npm run build

echo "Removing prior deployment..."
rm -rf /var/www/personal-site/assets/*
rm -f  /var/www/personal-site/index.html

echo "Copying over new build..."
cp -r dist/* /var/www/personal-site/

echo "Removing files from $TARGET_DIR"
rm -rf "$TARGET_DIR"

# Clean out the global npm cache downloads completely
echo "Cleaning npm cache..."
npm cache clean --force

echo "Deployment complete"
