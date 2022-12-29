const shell = require('shelljs');

function lint(type) {
  if (type === 'build') {
    shell.echo('[2/6] 📝  Eslint control...');
    shell.exec(`yarn run lint`);
  }
}

module.exports = lint;
