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

  // theme selected for generic color
  for (const [key, value] of Object.entries(themes[dark ? 'dark' : 'light'])) {
    const keyTrans = structuralString(key);
    varCss = `${varCss}--mkt-${keyTrans}:${value};`;
  }

  // theme light
  for (const [key, value] of Object.entries(themes['light'])) {
    const keyTrans = structuralString(key);
    varCss = `${varCss}--mkt-${keyTrans}--light:${value};`;
  }

  // theme dark
  for (const [key, value] of Object.entries(themes['dark'])) {
    const keyTrans = structuralString(key);
    varCss = `${varCss}--mkt-${keyTrans}--dark:${value};`;
  }
  return `:root {\n ${varCss}\n }\n\n`;
}
export default genStylesRoot;
