const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = 'out';
const buildDir = '.build';

console.log('Creating static export for GitHub Pages deployment...');

try {
  // Check if .build directory exists (created by Next.js export)
  if (!fs.existsSync(buildDir)) {
    console.error('Error: .build directory not found. Build may have failed.');
    process.exit(1);
  }
  
  // Create out directory
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  
  // Copy all contents from .build to out
  console.log('Copying build artifacts to out/ directory...');
  execSync(`cp -r ${buildDir}/* ${outDir}/`);
  
  // Ensure 404.html exists for GitHub Pages
  const notFoundHtml = path.join(outDir, '404.html');
  if (!fs.existsSync(notFoundHtml)) {
    // Create a simple 404 page if it doesn't exist
    const indexHtml = path.join(outDir, 'index.html');
    if (fs.existsSync(indexHtml)) {
      fs.copyFileSync(indexHtml, notFoundHtml);
    }
  }
  
  console.log('✓ Static export created successfully in out/ directory');
  console.log(`  Files: ${fs.readdirSync(outDir).length} items`);
} catch (error) {
  console.error('Error creating static export:', error.message);
  console.error(error.stack);
  process.exit(1);
}