/**
 * CONFIG
 *
 * @link https://storybook.js.org/docs/react/configure/features-and-behavior
 */

import { addons } from "@storybook/addons";
import ManaTheme from "./theming";

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: "bottom",
  enableShortcuts: false,
  showToolbar: true,
  theme: ManaTheme,
  selectedPanel: undefined,
  initialActive: "sidebar",
  sidebar: {
    showRoots: false,
    collapsedRoots: ["other"],
  },
  toolbar: {
    title: { hidden: false },
    zoom: { hidden: true },
    eject: { hidden: true },
    copy: { hidden: false },
    fullscreen: { hidden: true },
  },
});
