const shell = require('shelljs');
const chalk = require('chalk');

function test(type) {
  if (type === 'build') {
    shell.echo(chalk.grey('[3/6]') + ' 🪤   Test package...');
    shell.exec(`yarn jest`);
  }
}

module.exports = test;
