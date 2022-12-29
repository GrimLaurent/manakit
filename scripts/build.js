const shell = require('shelljs');
const chalk = require('chalk');

function build(type) {
  if (type === 'build') {
    shell.echo(chalk.grey('[4/6]') + ' 📦  Build packages...');
    shell.exec(`rollup -c`);
  }
}

module.exports = build;
