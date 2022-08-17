/**
 * createModeDefault
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns string
 */
import { CoreThemeType, CustomThemeType } from '../../types';

const createModeDefault = (configInit: CoreThemeType, configCustom?: CustomThemeType) => {
  let modeDefault = configInit.mode.default;
  if (configCustom && configCustom.mode && configCustom.mode?.default) {
    modeDefault = configCustom.mode?.default;
  }

  return modeDefault;
};

export default createModeDefault;
