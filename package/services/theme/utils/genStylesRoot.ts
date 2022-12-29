// utils
import { structuralString } from '../../../utils/format';

/**
 * genStylesRoot
 * @param themes
 * @param dark
 * @returns string
 */
function genStylesRoot(themes: any, dark?: boolean) {
  let varCss = '';

  for (const [key, value] of Object.entries(themes[dark ? 'dark' : 'light'])) {
    const keyTrans = structuralString(key);
    varCss = `${varCss}--manakit-${keyTrans}:${value};`;
  }

  return `:root {\n ${varCss}\n }\n\n`;
}
export default genStylesRoot;
