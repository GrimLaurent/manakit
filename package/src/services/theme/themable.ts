// types
import { UserPreset } from '../../types';

// utils
import setTheme from './utils/setTheme';

/**
 * Themeable
 * @param userPreset
 * @returns object
 */
function Themeable(userPreset?: UserPreset) {
  // initial
  let disable = false;

  if (userPreset?.theme?.disable) {
    disable = userPreset?.theme?.disable;
  }

  if (disable) {
    return;
  }

  let themes = {
    light: {},
    dark: {},
  };

  themes.light = setTheme('light', userPreset?.theme?.themes!['light']);
  themes.dark = setTheme('dark', userPreset?.theme?.themes!['dark']);

  return themes;
}

export default Themeable;
