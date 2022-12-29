const shell = require('shelljs');
const chalk = require('chalk');

function lint(type) {
  if (type === 'build') {
    shell.echo(chalk.grey('[2/6]') + ' 📝  Eslint control...');
    shell.exec(`yarn run lint`);
  }
}

module.exports = lint;
