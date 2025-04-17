#!/bin/sh

# Replace environment variables in the main.js file
JS_FILES=$(find /usr/share/nginx/html/assets -type f -name "*.js")

for file in $JS_FILES; do
  echo "Processing $file..."
  
  # Replace environment variables
  sed -i 's|__VITE_API_URL__|'"${VITE_API_URL}"'|g' $file
done

echo "Environment variables injected!"