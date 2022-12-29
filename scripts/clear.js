const shell = require('shelljs');
const chalk = require('chalk');
const pkg = require('../package.json');

function clear(type) {
  if (type === 'build' || type === 'deploy') {
    shell.echo('[1] 🔍 Clear workspace...');
    shell.exec(`rm -rf build`);
  }
}

module.exports = clear;
