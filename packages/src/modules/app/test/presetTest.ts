// Types
import { ManakitPreset } from '../../../types';

export const presetTestSSR: ManakitPreset = {
  ssr: true,
  theme: {
    default: 'light',
    disable: false,
    themes: {
      light: {
        primary: '#6750A4',
      },
      dark: {
        primary: '#D0BCFF',
      },
    },
  },
};

export const presetTestnoSSR: ManakitPreset = {
  ssr: false,
  theme: {
    default: 'light',
    disable: false,
    themes: {
      light: {
        primary: '#6750A4',
      },
      dark: {
        primary: '#D0BCFF',
      },
    },
  },
};
