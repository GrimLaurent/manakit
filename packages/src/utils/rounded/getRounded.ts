import { RoundedType, CoreThemeType } from '../../types';
/**
 * useRoundedTheme
 * @param value
 * @param persistent
 * @returns number | string
 */

const getRounded = (theme: CoreThemeType, value?: RoundedType, persistent?: RoundedType) => {
  if (value) {
    if (typeof value === 'boolean') {
      if (persistent) return theme.sys.rounded['md'];
      else return theme.sys.rounded['none'];
    } else {
      if (value !== undefined) return theme.sys.rounded[value];
    }
  } else {
    if (typeof persistent === 'boolean') {
      if (persistent) return theme.sys.rounded['md'];
      else return theme.sys.rounded['none'];
    } else {
      if (persistent !== undefined) return theme.sys.rounded[persistent];
      else return theme.sys.rounded['none'];
    }
  }
};

export default getRounded;
