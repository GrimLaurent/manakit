const shell = require('shelljs');

function lint(type) {
  if (type === 'build' || type === 'deploy') {
    shell.echo('[2] 🔗  Eslint control...');
    shell.exec(`yarn run lint`);
  }
}

module.exports = lint;
