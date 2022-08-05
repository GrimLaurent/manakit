/**
 * createBreakpoint
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from '../../types';
import { concatObject } from '../../utils';

const createBreakpoint = (configInit: DefaultThemeType, configCustom?: any) => {
  if (configCustom) {
    if (configCustom?.breakpoint) {
      let breakpoint = configInit.breakpoint.treshold;

      if (configCustom?.breakpoint?.treshold) {
        breakpoint = concatObject(breakpoint, configCustom?.breakpoint?.treshold);
      }

      return breakpoint;
    }
  }
  // if themesCustom is undefined
  return configInit.breakpoint.treshold;
};

export default createBreakpoint;
