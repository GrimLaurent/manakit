/**
 * createRounded
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from '../../types';
import { concatObject } from '../../utils';

const createRounded = (configInit: DefaultThemeType, configCustom?: any) => {
  if (configCustom) {
    if (configCustom?.rounded) {
      let rounded = configInit.rounded;

      if (configCustom?.rounded) {
        rounded = concatObject(rounded, configCustom?.rounded);
      }

      return rounded;
    }
  }
  // if configCustom is undefined
  return configInit.rounded;
};

export default createRounded;
