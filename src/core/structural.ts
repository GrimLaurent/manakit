import evolDefaultTheme from '../assets/themes/evol';
import { createBreakpoint, createFont, createRounded, createTheme, createModeDefault } from './structure';
import { CustomThemeType } from '../types';

const core = (theme?: CustomThemeType, mode?: 'dark' | 'light') => {
  return {
    mode: {
      default: createModeDefault(evolDefaultTheme, theme),
      use: mode ? mode : createModeDefault(evolDefaultTheme, theme),
    },
    sys: {
      font: createFont(evolDefaultTheme, theme),
      breakpoint: createBreakpoint(evolDefaultTheme, theme),
      rounded: createRounded(evolDefaultTheme, theme),
    },
    themes: createTheme(evolDefaultTheme, theme),
  };
};

export default core;
