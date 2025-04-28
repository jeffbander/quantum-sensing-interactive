# Updated Integration Guide for Quantum Sensing Interactive Tool

## Overview

This updated guide provides instructions for properly deploying the Quantum Sensing Interactive Visualization Tool to Google Cloud Storage with the necessary configurations to ensure the interactive 3D elements work correctly.

## Prerequisites

- Google Cloud SDK installed (for gsutil commands)
- Access to your Google Cloud Storage bucket

## Step 1: Upload Files

First, upload all files from the deployment package to your Google Cloud Storage bucket:

```
gsutil -m cp -r quantum_sensing_deployment/* gs://mount-sinai-west-center/website/quantum-interactive/
```

## Step 2: Configure for Interactive 3D Content

The interactive 3D visualizations require specific configurations to work properly on Google Cloud Storage. We've provided two options to complete this configuration:

### Option A: Using the Automated Script (Recommended)

1. Upload the `cors.json` file to your local machine
2. Upload the `configure_gcs.sh` script to your local machine
3. Make the script executable:
   ```
   chmod +x configure_gcs.sh
   ```
4. Run the script:
   ```
   ./configure_gcs.sh
   ```

### Option B: Manual Configuration

If you prefer to configure manually, follow these steps:

1. Set correct MIME types for JavaScript files:
   ```
   gsutil -m setmeta -h "Content-Type:application/javascript" gs://mount-sinai-west-center/website/quantum-interactive/_next/static/chunks/*.js
   gsutil -m setmeta -h "Content-Type:application/javascript" gs://mount-sinai-west-center/website/quantum-interactive/_next/static/LJS8PWVyqrDZfdfjWw5Nt/*.js
   ```

2. Configure CORS for your bucket:
   - Create a file named `cors.json` with the following content:
     ```json
     [
       {
         "origin": ["*"],
         "responseHeader": ["Content-Type", "Access-Control-Allow-Origin"],
         "method": ["GET", "HEAD", "OPTIONS"],
         "maxAgeSeconds": 3600
       }
     ]
     ```
   - Apply the CORS configuration:
     ```
     gsutil cors set cors.json gs://mount-sinai-west-center
     ```

3. Ensure all files are publicly readable:
   ```
   gsutil -m acl set -R public-read gs://mount-sinai-west-center/website/quantum-interactive/
   ```

## Step 3: Verify Deployment

After completing the configuration, verify that the interactive tool works correctly by accessing:
https://storage.googleapis.com/mount-sinai-west-center/website/quantum-interactive/index.html

You should now be able to interact with all the 3D visualizations:
- Quantum Particle Simulator
- Noise Floor Simulator
- Medical Application Simulator

## Step 4: Link from Main Website

Add a link to the interactive tool from your main website by adding the following HTML to an appropriate page (e.g., scientific-foundation.html):

```html
<section class="interactive-tool-section">
    <div class="container">
        <h2>Interactive Quantum Sensing Visualization</h2>
        <p>Explore the fundamental differences between quantum and classical sensing technologies through our interactive 3D visualization tool. This educational resource demonstrates how quantum principles enable unprecedented sensitivity in medical applications.</p>
        <div class="cta-buttons">
            <a href="/website/quantum-interactive/index.html" class="btn btn-primary">Launch Interactive Tool</a>
        </div>
    </div>
</section>
```

## Troubleshooting

If you encounter issues with the interactive elements:

1. **Blank or non-interactive visualizations**: Verify that the MIME types and CORS settings have been properly configured
2. **Console errors about cross-origin requests**: Check that the CORS configuration has been applied correctly
3. **Missing JavaScript files**: Ensure all files were uploaded with the correct directory structure

## Alternative Deployment Options

If you continue to experience issues with Google Cloud Storage, consider using one of these platforms which are optimized for interactive web applications:

- **Netlify**: Simply drag and drop the quantum_sensing_deployment folder to deploy
- **Vercel**: Optimized for Next.js applications with excellent performance
- **GitHub Pages**: Free hosting directly from a GitHub repository

These platforms automatically handle the correct configuration for interactive 3D content.
