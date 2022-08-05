/**
 * createIconFont
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from '../../types';

const createIconFont = (configInit: DefaultThemeType, configCustom?: any) => {
  if (configCustom) {
    if (configCustom?.icon) {
      let iconfont = configInit.icon.iconfont;

      if (configCustom?.icon.iconfont) {
        iconfont = configCustom?.icon.iconfont;
      }

      return iconfont;
    }
  }
  // if configCustom is undefined
  return configInit.icon.iconfont;
};

export default createIconFont;
