//Preset Manakit
import { preset } from '../../../presets/default';

// Utils
import { concatObject } from '../../../utils';

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
