/**
 * ModeSystem ( Chromium )
 * @description get config theme with browser
 * @link https://developer.mozilla.org/fr/docs/Web/CSS/@media/prefers-color-scheme
 * @returns boolean
 */

const ModeSystem = () => {
  // const dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const dark = false;
  return dark;
};

export default ModeSystem;
