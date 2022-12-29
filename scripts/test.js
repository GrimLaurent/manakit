const shell = require('shelljs');

function test(type) {
  if (type === 'build') {
    shell.echo('[3/6] 🪤   Test package...');
    shell.exec(`yarn jest`);
  }
}

module.exports = test;
