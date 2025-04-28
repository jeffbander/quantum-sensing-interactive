# Quantum Sensing Interactive Visualization Tool - Integration Guide

## Overview

This guide provides detailed instructions for integrating the Quantum Sensing Interactive Visualization Tool into your existing Mount Sinai West Center website on Google Cloud Storage.

## Directory Structure

The recommended directory structure for integration is:

```
mount-sinai-west-center/
└── website/                 (existing Mount Sinai West Center website)
    └── quantum-interactive/ (new directory for this tool)
        ├── index.html       (main entry point)
        ├── _next/           (JavaScript, CSS, and assets)
        ├── images/          (image assets)
        └── ...              (other static files)
```

## Integration Steps

### 1. Create the Directory

Create a new directory in your Google Cloud Storage bucket:

```
gsutil mkdir gs://mount-sinai-west-center/website/quantum-interactive/
```

### 2. Upload the Files

Upload all files from this package to the new directory, maintaining the exact directory structure:

```
gsutil -m cp -r * gs://mount-sinai-west-center/website/quantum-interactive/
```

### 3. Set Proper MIME Types

Ensure proper MIME types are set for all files:

```
gsutil -m setmeta -h "Content-Type:text/html" gs://mount-sinai-west-center/website/quantum-interactive/*.html
gsutil -m setmeta -h "Content-Type:application/javascript" gs://mount-sinai-west-center/website/quantum-interactive/_next/static/chunks/*.js
gsutil -m setmeta -h "Content-Type:text/css" gs://mount-sinai-west-center/website/quantum-interactive/_next/static/css/*.css
```

### 4. Set Public Access

Make sure all files are publicly accessible:

```
gsutil -m acl set -R public-read gs://mount-sinai-west-center/website/quantum-interactive/
```

### 5. Link from Main Website

Add a link to the interactive tool from your main website by adding the following HTML to an appropriate page (e.g., scientific-foundation.html):

```html
<div class="cta">
    <div class="container">
        <h2>Interactive Quantum Sensing Visualization</h2>
        <p>Explore our interactive tool to understand the fundamental differences between quantum and classical sensing technologies.</p>
        <a href="/website/quantum-interactive/index.html" class="btn btn-primary">Launch Interactive Tool</a>
    </div>
</div>
```

## Testing the Integration

After uploading, verify the tool is working correctly by accessing:
https://storage.googleapis.com/mount-sinai-west-center/website/quantum-interactive/index.html

Check the following:
- All 3D visualizations load properly
- Interactive elements respond to user input
- The tool works on both desktop and mobile devices

## Troubleshooting

If you encounter any issues:

1. **Blank screen or missing assets**: Ensure all files were uploaded with the correct directory structure
2. **3D visualizations not loading**: Check browser console for WebGL errors
3. **Incorrect file paths**: Verify all paths are relative to the quantum-interactive directory

## Browser Compatibility

The tool has been tested and works with:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome for Android)

## Performance Considerations

The 3D visualizations require WebGL support and may be resource-intensive on older devices. The application is designed to automatically adjust quality settings based on device capabilities.
