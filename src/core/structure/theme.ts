/**
 * createTheme
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { CoreThemeType, CustomThemeType } from '../../types';
import { concatObject } from '../../utils';

const createTheme = (configInit: CoreThemeType, configCustom?: CustomThemeType) => {
  let light = configInit.themes.light;
  let dark = configInit.themes.dark;

  if (configCustom && configCustom?.themes) {
    if (configCustom?.themes?.light) {
      light = concatObject(light, configCustom?.themes?.light);
    }

    if (configCustom?.themes?.dark) {
      dark = concatObject(dark, configCustom?.themes?.dark);
    }
  }

  return {
    light: light,
    dark: dark,
  };
};

export default createTheme;
