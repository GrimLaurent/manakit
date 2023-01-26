// utils
import { structuralString } from '../../../utils/format';
/**
 * genStyleCss
 * @param styleHTML
 * @param themes
 * @returns boolean
 */
function genStyleCss(styleHTML: HTMLStyleElement, themes: any) {
  const t = ['light', 'dark'];

  t.map((e: string) => {
    for (const [key, value] of Object.entries(themes[e])) {
      const keyTrans = structuralString(key);
      styleHTML!.sheet!.insertRule(
        `.mkt-application.theme--${e} .${keyTrans} {background-color: ${value} !important; border-color: ${value} !important;}`,
        0,
      );
      styleHTML!.sheet!.insertRule(
        `.mkt-application.theme--${e} .${keyTrans}--outlined {border-color: ${value} !important;}`,
        0,
      );
      styleHTML!.sheet!.insertRule(
        `.mkt-application.theme--${e} .${keyTrans}--text {color: ${value} !important; caret-color: ${value} !important;}`,
        0,
      );

      // force theme with props dark/light
      styleHTML!.sheet!.insertRule(
        `.mkt-application .${keyTrans}-${e} {background-color: ${value} !important; border-color: ${value} !important;}`,
        0,
      );
      styleHTML!.sheet!.insertRule(
        `.mkt-application .${keyTrans}-${e}--outlined {border-color: ${value} !important;}`,
        0,
      );
      styleHTML!.sheet!.insertRule(
        `.mkt-application .${keyTrans}-${e}--text {color: ${value} !important; caret-color: ${value} !important;}`,
        0,
      );

      // SVG Support
      styleHTML!.sheet!.insertRule(
        `.k-application.theme--${e} .${keyTrans}--text path {fill: ${value} !important;}`,
        0,
      );
      styleHTML!.sheet!.insertRule(`.k-application .${keyTrans}-${e}--text path {fill: ${value} !important;}`, 0);
    }
  });

  return true;
}
export default genStyleCss;
