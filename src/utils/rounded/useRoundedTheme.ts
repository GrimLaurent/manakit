import { useContext } from 'react';
import { ThemeApi } from '../../core';
import { RoundedType } from '../../types';
/**
 * useRoundedTheme
 * @param key
 * @returns
 */

const useRoundedTheme = (value: RoundedType, persistent?: RoundedType) => {
  const contextTheme: any = useContext(ThemeApi);
  console.log(value, persistent);
  console.log('contextTheme', contextTheme);

  // if (persistent && value === undefined) {
  //   return contextTheme
  // }
};

export default useRoundedTheme;
