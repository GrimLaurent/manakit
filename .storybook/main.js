/**
 * STORYBOOK
 * @description Generate documentation for ManaKit
 * @link https://storybook.js.org/
 */

const path = require("path");

/**
 * DOCUMENTATION
 * @link https://github.com/storybookjs/presets/tree/master/packages/preset-scss
 */

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-scss",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
    disableTelemetry: true, // 👈 Disables telemetry
  },
};
