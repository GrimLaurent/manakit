import { preset } from '../../presets/default';

// types
import { ColorScheme, UserPreset } from '../../types';

function colorScheme(userPreset?: UserPreset, mode?: ColorScheme) {
  if (mode === 'auto') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    } else {
      return 'light';
    }
  } else {
    if (mode) {
      return mode;
    } else if (userPreset?.theme?.default !== undefined) {
      return userPreset?.theme?.default; // default by developer
    } else {
      return preset.theme.default; // default
    }
  }
}

export default colorScheme;
