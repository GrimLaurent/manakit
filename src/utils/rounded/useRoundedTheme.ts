import { useContext } from 'react';
import { ThemeApi } from '../../core';
import { RoundedType } from '../../types';
/**
 * useRoundedTheme
 * @param value
 * @param persistent
 * @returns number | string
 */

const useRoundedTheme = (value?: RoundedType, persistent?: RoundedType) => {
  const contextTheme: any = useContext(ThemeApi);

  if (value) {
    if (typeof value === 'boolean') {
      if (persistent) return contextTheme.sys.rounded['md'];
      else return contextTheme.sys.rounded['none'];
    } else {
      if (value !== undefined) return contextTheme.sys.rounded[value];
    }
  } else {
    if (typeof persistent === 'boolean') {
      if (persistent) return contextTheme.sys.rounded['md'];
      else return contextTheme.sys.rounded['none'];
    } else {
      if (persistent !== undefined) return contextTheme.sys.rounded[persistent];
      else return contextTheme.sys.rounded['none'];
    }
  }
};

export default useRoundedTheme;
