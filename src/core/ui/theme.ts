/**
 * createTheme
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from './../../types/theming';
import { concatObject } from '../../utils';

const createTheme = (configInit: DefaultThemeType, configCustom?: any) => {
  if (configCustom) {
    if (configCustom?.theme && configCustom?.theme?.themes) {
      let light = configInit.theme.themes.light;
      let dark = configInit.theme.themes.dark;

      if (configCustom?.theme?.themes?.light) {
        light = concatObject(light, configCustom?.theme?.themes?.light);
      }

      if (configCustom?.theme?.themes?.dark) {
        dark = concatObject(dark, configCustom?.theme?.themes?.dark);
      }

      return {
        light: light,
        dark: dark,
      };
    }
  }
  // if themesCustom is undefined
  return configInit.theme.themes;
};

export default createTheme;
