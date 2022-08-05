import { createBreakpoint, createFont, createIconFont, createIconFontValue, createRounded, createTheme } from '../ui';

const customCore = (init: any, theme: any) => {
  return {
    font: createFont(init, theme),
    breakpoint: {
      treshold: createBreakpoint(init, theme),
    },
    rounded: createRounded(init, theme),
    icon: {
      iconfont: createIconFont(init, theme),
      value: createIconFontValue(init, theme),
    },
    theme: { themes: createTheme(init, theme) },
  };
};

export default customCore;
