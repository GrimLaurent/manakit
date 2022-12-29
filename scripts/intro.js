const shell = require('shelljs');
const chalk = require('chalk');
const pkg = require('../package.json');

function intro(type) {
  if (type === 'build') {
    shell.echo(chalk.bold('yarn build'));
  }

  shell.echo(chalk.blue('info') + ' Direct info for build');
  shell.echo('└─ ' + pkg.author);
  shell.echo('└─ ' + pkg.name);
  shell.echo('└─ ' + pkg.version);
}

module.exports = intro;
