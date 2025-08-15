// Simple script to help download project files
// You can run this in the browser console or use it as reference

const filesToDownload = [
  'package.json',
  'index.html',
  'vite.config.ts',
  'tailwind.config.js',
  'tsconfig.json',
  'tsconfig.app.json',
  'tsconfig.node.json',
  'postcss.config.js',
  'eslint.config.js',
  'src/main.tsx',
  'src/App.tsx',
  'src/index.css',
  'src/vite-env.d.ts'
];

console.log('Project files to download:');
filesToDownload.forEach(file => console.log(`- ${file}`));
console.log('\nYou can download these files individually from the file explorer.');