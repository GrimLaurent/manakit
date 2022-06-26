/**
 * HOOK
 * @description hook config for yarn command in terminal
 * @function npmHookDeploy => yarn deploy
 */
const { execSync } = require('child_process');
const shell = require('shelljs');
const chalk = require('chalk');
const boxen = require('boxen');

// const
const storybookFolderDefault = 'storybook-static';
const storybookFolderNaming = 'docs';

/**
 * DEPLOY
 */
function npmHookDeploy() {
  shell.exec(`rm -rf build`);
  shell.exec(`clear`);
  shell.echo(boxen(chalk.bold.magenta('📦 ManaKit - Go go go for deploy your dev in world !!!')));

  shell.echo(chalk.bold.bgBlue('📦  Build your Code'));
  shell.exec(`yarn build`);
  shell.echo(chalk.bold.bgGreen('✅ Build Success'));

  shell.echo(chalk.bold.bgBlue('📦  Test and versionning your code'));
  shell.exec(`yarn lint`);
  shell.exec(`yarn test`);
  shell.echo(chalk.bold.bgGreen('✅ Test Success'));

  shell.echo(chalk.bold.bgBlue('📦  Generating Doc'));
  shell.exec(`yarn build-storybook`);
  shell.exec(`mv ${storybookFolderDefault} ${storybookFolderNaming}`);
  shell.exec(`cp -r ${storybookFolderNaming} build`);
  shell.exec(`rm -rf docs`);
  shell.echo(chalk.bold.bgGreen('✅ Doc Build Success'));

  shell.echo(chalk.bold.bgBlue('📦  Prepare for deploy'));
  shell.exec(`cp LICENSE.md build/`);
  shell.exec(`cp README.md build/`);
  shell.exec(`cp CONTRIBUTING.md build/`);
  shell.echo(chalk.bold.bgGreen('✅ Ready for publish ! (yarn publish)'));
}

for (var i = 0; i < process.argv.length; i++) {
  switch (process.argv[i]) {
    case 'deploy':
      npmHookDeploy();
      break;
  }
}
