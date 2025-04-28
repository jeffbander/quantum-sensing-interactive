#!/bin/bash

# Script to configure Google Cloud Storage for interactive 3D content
# Created for Mount Sinai West Center Quantum Sensing Interactive Tool

echo "Configuring Google Cloud Storage for interactive 3D content..."

# Set correct MIME types for JavaScript files
echo "Setting correct MIME types for JavaScript files..."
gsutil -m setmeta -h "Content-Type:application/javascript" gs://mount-sinai-west-center/website/quantum-interactive/_next/static/chunks/*.js
gsutil -m setmeta -h "Content-Type:application/javascript" gs://mount-sinai-west-center/website/quantum-interactive/_next/static/LJS8PWVyqrDZfdfjWw5Nt/*.js

# Configure CORS for the bucket
echo "Configuring CORS settings..."
gsutil cors set cors.json gs://mount-sinai-west-center

# Ensure all files are publicly readable
echo "Setting public read access..."
gsutil -m acl set -R public-read gs://mount-sinai-west-center/website/quantum-interactive/

echo "Configuration complete! Your interactive 3D content should now work correctly."
echo "Access your application at: https://storage.googleapis.com/mount-sinai-west-center/website/quantum-interactive/index.html"
