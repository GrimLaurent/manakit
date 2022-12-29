const shell = require('shelljs');

function clear(type) {
  if (type === 'build') {
    shell.echo('[1/6] 🗑️   Clear workspace...');
    shell.exec(`rm -rf build`);
  }
}

module.exports = clear;
