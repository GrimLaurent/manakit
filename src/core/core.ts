import { createContext, useContext } from 'react';
import defaultTheme from '../assets/themes/default';
import { getElementStorage } from '../utils';
import { updateApi } from './api';
import { ModeSystem } from './browser';
import { ManakitLocalStorage } from './local';
import { customCore, rootCore } from './structure';

// Context Core
export let ThemeApi: any = createContext(updateApi(rootCore(defaultTheme)));
export let ModeApi: any = undefined;

export function ManakitCore(theme?: any) {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('_muid') === null) {
      ManakitLocalStorage('_muid');

      ModeApi = createContext(defaultTheme.theme.dark);
    } else {
      const storage = getElementStorage('_muid');
      if (storage?.theme?.system) {
        const systemTheme = ModeSystem();
        ModeApi = createContext(systemTheme);
      } else {
        ModeApi = createContext(storage.theme.dark);
      }
    }

    // API Theme
    if (theme) {
      const newTheme = customCore(defaultTheme, theme);
      ThemeApi = createContext(updateApi(newTheme));
    }
  }
}

export function updateMode() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('_muid') !== null) {
      const storage = getElementStorage('_muid');
      ModeApi = createContext(storage?.theme?.dark);
    }
  }
}

export function getLocalThemeMode() {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('_muid') !== null) {
      const storage = getElementStorage('_muid');
      return storage?.theme?.dark;
    }
  }
  return;
}
