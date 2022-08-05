/**
 * createIconFontValue
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from '../../types';
import { concatObject } from '../../utils';

const createIconFontValue = (configInit: DefaultThemeType, configCustom?: any) => {
  if (configCustom) {
    if (configCustom?.icon) {
      let iconvalue = configInit.icon.value;

      if (configCustom?.icon?.value) {
        iconvalue = concatObject(iconvalue, configCustom?.icon?.value);
      }

      return iconvalue;
    }
  }
  // if configCustom is undefined
  return configInit.icon.value;
};

export default createIconFontValue;
