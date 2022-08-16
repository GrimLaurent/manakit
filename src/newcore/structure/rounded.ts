/**
 * createRounded
 *
 * @description generate structure for API Manakit with fusion init and custom config
 * @param configInit
 * @param configCustom
 * @returns array
 */
import { CoreThemeType, CustomThemeType } from '../../types';
import { concatObject } from '../../utils';

const createRounded = (configInit: CoreThemeType, configCustom?: CustomThemeType) => {
  let rounded = configInit.sys.rounded;
  if (configCustom && configCustom.sys && configCustom.sys?.rounded) {
    rounded = concatObject(rounded, configCustom?.sys?.rounded);
  }

  return rounded;
};

export default createRounded;
