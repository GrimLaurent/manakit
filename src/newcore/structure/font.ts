/**
 * createFont
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { CoreThemeType, CustomThemeType } from '../../types';
import { concatObject } from '../../utils';

const createFont = (configInit: CoreThemeType, configCustom?: CustomThemeType) => {
  let font = configInit.sys.font;

  if (configCustom && configCustom?.sys && configCustom?.sys?.font) {
    font = concatObject(font, configCustom?.sys?.font);
  }
  return font;
};

export default createFont;
