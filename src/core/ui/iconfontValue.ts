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

const createIconFontValue = (configInit: any, configCustom?: any) => {
  let iconvalue = configInit.sys.icon.value;

  if (configCustom && configCustom?.sys && configCustom?.sys?.icon && configCustom?.sys?.icon?.value) {
    iconvalue = concatObject(iconvalue, configCustom?.icon?.value);
  }
  return iconvalue;
};

export default createIconFontValue;
