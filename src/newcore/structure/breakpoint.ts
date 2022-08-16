/**
 * createBreakpoint
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { CoreThemeType, CustomThemeType } from '../../types';
import { concatObject } from '../../utils';

const createBreakpoint = (configInit: CoreThemeType, configCustom?: CustomThemeType) => {
  let breakpoint = configInit.sys.breakpoint;

  if (configCustom && configCustom?.sys && configCustom?.sys?.breakpoint) {
    breakpoint = concatObject(breakpoint, configCustom?.sys?.breakpoint);
  }

  return breakpoint;
};

export default createBreakpoint;
