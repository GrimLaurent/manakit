/**
 * HOOK
 * @description hook config for yarn command in terminal
 * @function npmHookBuild => yarn build
 */
const { execSync } = require('child_process');
const shell = require('shelljs');

const intro = require('./intro');
const clear = require('./clear');
const build = require('./build');
const lint = require('./lint');
const test = require('./test');

function hook(type) {
  shell.exec(`clear`);
  intro(type);
  clear(type);
  lint(type);
  test(type);
  build(type);

  shell.echo('[5/6] 🗂️   Fetching copyright and documentation...');
  shell.exec(`cp LICENSE.md build/`);
  shell.exec(`cp README.md build/`);
  shell.exec(`cp CONTRIBUTING.md build/`);

  shell.echo('[6/6] 🚀  Ready for publish ?');
}

for (var i = 0; i < process.argv.length; i++) {
  switch (process.argv[i]) {
    case 'build':
      hook('build');
      break;
  }
}
