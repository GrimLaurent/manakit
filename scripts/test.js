const shell = require('shelljs');

function test(type) {
  if (type === 'build' || type === 'deploy') {
    shell.echo('[3] 🔗  Test package...');
    shell.exec(`yarn jest`);
  }
}

module.exports = test;
