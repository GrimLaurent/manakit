import Themeable from './themable';

// Types
import { UserPreset } from '../../types';

// Utils
import genStyleCss from './utils/genStylesCss';
import genStylesRoot from './utils/genStylesRoot';
import genStyleElement from './utils/genStyleElement';

function Theme(userPreset?: UserPreset, dark?: boolean) {
  const applyTheme = Themeable(userPreset);

  if (checkOrCreateStyleElement()) {
    const styleEl = document.getElementById('manakit-theme-stylesheet') as HTMLStyleElement;

    if (styleEl) {
      const css = genStylesRoot(applyTheme, dark);
      styleEl!.sheet!.insertRule(css, 0);
      genStyleCss(styleEl, applyTheme);
    }
  }
}

export default Theme;

function checkOrCreateStyleElement(): boolean {
  const styleEl = document.getElementById('manakit-theme-stylesheet') as HTMLStyleElement;

  if (styleEl) {
    // clear style generated
    styleEl.remove();
  }

  genStyleElement(); // If doesn't have it, create it

  return true;
}
