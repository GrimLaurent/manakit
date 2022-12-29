const shell = require('shelljs');
const chalk = require('chalk');

function clear(type) {
  if (type === 'build') {
    shell.echo(chalk.grey('[1/6]') + ' 🗑️   Clear workspace...');
    shell.exec(`rm -rf build`);
  }
}

module.exports = clear;
