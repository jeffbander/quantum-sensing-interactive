# Quantum Sensing Interactive Visualization Tool

This package contains a complete interactive visualization tool that explains the differences between quantum sensing and traditional sensing technologies. The application includes interactive 3D simulations demonstrating quantum principles and their applications in medical contexts.

## Integration Instructions

This application should be integrated into your existing Google Cloud Storage deployment at:
https://storage.googleapis.com/mount-sinai-west-center/

### Recommended Integration Path

We recommend creating a dedicated subdirectory for this interactive tool:

```
mount-sinai-west-center/
└── website/                 (existing Mount Sinai West Center website)
    └── quantum-interactive/ (new directory for this tool)
```

## Files Overview

- `index.html` - Main entry point for the application
- `_next/` - Contains all JavaScript, CSS, and other assets
- `images/` - Directory for image assets
- Other static files and resources

## Deployment Steps

1. Create a new directory in your Google Cloud Storage bucket:
   - Path: `mount-sinai-west-center/website/quantum-interactive/`

2. Upload all files from this package to that directory, maintaining the exact directory structure.

3. Ensure the following path is accessible:
   - `https://storage.googleapis.com/mount-sinai-west-center/website/quantum-interactive/index.html`

4. Link to this tool from your main Mount Sinai West Center website by adding a link to:
   - `https://storage.googleapis.com/mount-sinai-west-center/website/quantum-interactive/index.html`

## Important Notes

- All file paths are relative within this package, so the directory structure must be maintained.
- The application uses 3D visualizations with Three.js, which requires WebGL support in the browser.
- The tool is fully responsive and works on desktop, tablet, and mobile devices.
