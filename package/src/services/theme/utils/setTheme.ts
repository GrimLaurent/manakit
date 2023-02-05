// preset ManaKit
import { preset } from '../../../presets/default';

// utils
import { concatObject } from '../../../utils/format';

/**
 * setTheme
 * @param mode
 * @param value
 * @returns object
 */
function setTheme(mode: 'light' | 'dark', value?: object) {
  return value ? concatObject(preset!.theme!.themes![mode]!, value) : preset!.theme!.themes![mode]!;
}
export default setTheme;
