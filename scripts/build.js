const shell = require('shelljs');

function build(type) {
  if (type === 'build') {
    shell.echo('[4/6] 📦  Build packages...');
    shell.exec(`rollup -c`);
  }
}

module.exports = build;
