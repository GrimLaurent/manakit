# Manakit Developer's

This documentation is intended for developers who wish to participate actively in the development of Manakit.
You will find all the steps to configure your environment and the packages necessary for the development of the project. Feel free to join our **[Discord](https://discord.gg/ATm5mcPK3h)**.

**Let's go!**

## Dev env

|             | [node.js](https://www.npmjs.com/package/node)     | [yarn](https://www.npmjs.com/package/yarn)        |
| ----------- | ------------------------------------------------- | ------------------------------------------------- |
| Version use | 18.2.0                                            | 1.22.18                                           |
| Lts         | ![npm version](https://badge.fury.io/js/node.svg) | ![npm version](https://badge.fury.io/js/yarn.svg) |

_last update: 26/06/2022_

### Configuration

When recovering the project you must execute this command only once, we do not recommend using npm i because we have checked the dependencies with the **yarn** package.

    yarn

**husky**
In order to automate the tests on the project, we use the Husky package which ensures to launch the **lint** and **test** services during your _commits_ and _pushes_.

    yarn prepare

### Mode Build

A hook allows to build the project and to prepare its use for a local link.
When you build the project. The new compilation is created in the folder **build**.

With each build the **linter** and the **tests** are executed in order to verify your code.

    yarn build

**Test in local project**

You have the possibility with a build to use **Manakit** on your project locally without having to go through the npm repository.

In your project use the **npm link**.

    npm link manakit

With each new local build of Manakit, your linked project will be synchronized

### Mode Publish

**Only Laurent Grimaldi has the rights to publish the Manakit.**
**Submit your Merge Request to the reviewer at @Lalattyna**
