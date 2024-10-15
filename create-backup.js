const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const output = fs.createWriteStream(path.join(__dirname, 'proyecto-turismo-backup.zip'));
const archive = archiver('zip', {
  zlib: { level: 9 } // Sets the compression level.
});

output.on('close', function() {
  console.log(archive.pointer() + ' total bytes');
  console.log('La copia de seguridad ha sido creada exitosamente.');
});

archive.on('error', function(err) {
  throw err;
});

archive.pipe(output);

// Añadir los archivos del proyecto
archive.directory('src/', 'src');
archive.directory('public/', 'public');

// Añadir archivos de configuración
archive.file('package.json', { name: 'package.json' });
archive.file('tsconfig.json', { name: 'tsconfig.json' });
archive.file('vite.config.ts', { name: 'vite.config.ts' });
archive.file('index.html', { name: 'index.html' });
archive.file('tailwind.config.js', { name: 'tailwind.config.js' });
archive.file('postcss.config.js', { name: 'postcss.config.js' });
archive.file('README.md', { name: 'README.md' });

archive.finalize();