const shell = require('shelljs');

function build(type) {
  if (type === 'build' || type === 'deploy') {
    shell.echo('[3/4] 🚚 Build packages...');
    shell.exec(`rollup -c`);
  }
}

module.exports = build;
