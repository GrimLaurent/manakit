// utils
import { structuralString } from '../../../utils/format';
import rgb from '../../../utils/rgb';

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
    const valueTrans = rgb(value);
    varCss = `${varCss}--mkt-${keyTrans}:${valueTrans};`;
  }

  // theme light
  for (const [key, value] of Object.entries(themes['light'])) {
    const keyTrans = structuralString(key);
    const valueTrans = rgb(value);
    varCss = `${varCss}--mkt-${keyTrans}--light:${valueTrans};`;
  }

  // theme dark
  for (const [key, value] of Object.entries(themes['dark'])) {
    const keyTrans = structuralString(key);
    const valueTrans = rgb(value);
    varCss = `${varCss}--mkt-${keyTrans}--dark:${valueTrans};`;
  }
  return `:root {\n ${varCss}\n }\n\n`;
}
export default genStylesRoot;
