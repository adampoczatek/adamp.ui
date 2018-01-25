const recursive = require('recursive-readdir');
const CleanCSS = require('clean-css');
const fs = require('fs');
const fsPath = require('fs-path');
const path = require('path');
const pkg = require('../package.json');

recursive(path.resolve(__dirname, '../src/css'), (err, files) => {
  if (err) {
    throw new Error(err);
  }

  files.forEach((file) => {
    const source = fs.readFileSync(file, 'utf8');
    let output = source;

    if (process.env.NODE_ENV === 'production') {
      const cleaned = new CleanCSS().minify(source);
      output = cleaned.styles;
    }

    fsPath.writeFileSync(file.replace(/src/, `dist/${pkg.version}`), output, 'utf8');
  });

  console.log('CSS built!');
});
