import evolDefaultTheme from '../assets/themes/evol';
import { createBreakpoint, createFont, createRounded, createTheme } from './structure';
import { CustomThemeType } from '../types';

const core = (theme?: CustomThemeType) => {
  return {
    sys: {
      font: createFont(evolDefaultTheme, theme),
      breakpoint: createBreakpoint(evolDefaultTheme, theme),
      rounded: createRounded(evolDefaultTheme, theme),
    },
    themes: createTheme(evolDefaultTheme, theme),
  };
};

export default core;
