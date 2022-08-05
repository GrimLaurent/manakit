/**
 * getModeTheme
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns boolean
 */
import { DefaultThemeType } from './../../types/theming';

const getModeTheme = (configInit: DefaultThemeType, configCustom?: any) => {
  if (configCustom && configCustom?.theme && configCustom?.theme?.dark) {
    return configCustom.theme.dark;
  }
  // if configCustom is undefined
  return configInit.theme.dark;
};

export default getModeTheme;
