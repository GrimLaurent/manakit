// Utils
import { structuralString } from '../../../utils';

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
        `.mk-app.theme--${e} .${keyTrans} {background-color: ${value} !important; border-color: ${value} !important;}`,
        0,
      );
      styleHTML!.sheet!.insertRule(
        `.mk-app.theme--${e} .${keyTrans}--text {color: ${value} !important; caret-color: ${value} !important;}`,
        0,
      );

      // SVG Support
      styleHTML!.sheet!.insertRule(`.mk-app.theme--${e} .${keyTrans}--text path {fill: ${value} !important;}`, 0);
    }
  });

  return true;
}
export default genStyleCss;
