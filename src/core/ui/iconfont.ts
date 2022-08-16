/**
 * createIconFont
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { DefaultThemeType } from '../../types';

const createIconFont = (configInit: any, configCustom?: any) => {
  let iconfont = configInit.sys.icon.iconfont;

  if (configCustom && configCustom?.sys && configCustom?.sys?.icon && configCustom?.sys?.icon?.iconfont) {
    iconfont = configCustom?.icon.iconfont;
  }

  return iconfont;
};

export default createIconFont;
