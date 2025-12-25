#!/bin/bash

echo "Setting up Cloudflare Pages project..."

# Check if wrangler is installed
if ! command -v wrangler &> /dev/null; then
    echo "Error: Wrangler is not installed. Please install it first."
    echo "Run: npm install -g wrangler"
    exit 1
fi

# Login to Cloudflare if not already logged in
if ! wrangler whoami &> /dev/null; then
    echo "Please login to Cloudflare first:"
    echo "Run: wrangler login"
    exit 1
fi

# Create the Pages project
echo "Creating Cloudflare Pages project..."
wrangler pages project create "dental-qwik-v2" --production-branch=main

if [ $? -eq 0 ]; then
    echo "✅ Cloudflare Pages project created successfully!"
    echo ""
    echo "Now you can deploy using:"
    echo "bun run deploy"
    echo ""
    echo "Or manually:"
    echo "wrangler pages deploy dist"
else
    echo "❌ Failed to create Cloudflare Pages project"
    echo "You may need to create it manually via the Cloudflare Dashboard"
fi
