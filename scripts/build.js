const shell = require('shelljs');
const chalk = require('chalk');
const pkg = require('../package.json');

function build(type) {
  if (type === 'build' || type === 'deploy') {
    shell.echo('[3/4] 🚚 Build packages...');
    shell.exec(`rollup -c`);
  }
}

module.exports = build;
