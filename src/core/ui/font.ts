/**
 * createFont
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from '../../types';
import { concatObject } from '../../utils';

const createFont = (configInit: DefaultThemeType, configCustom?: any) => {
  if (configCustom) {
    if (configCustom?.font) {
      let font = configInit.font;

      if (configCustom?.font) {
        font = concatObject(font, configCustom?.font);
      }

      return font;
    }
  }
  // if configCustom is undefined
  return configInit.font;
};

export default createFont;
