/**
 * genStyleElement
 * @returns never
 */
function genStyleElement(): void {
  if (typeof document === 'undefined') return;
  const styleEl = document.createElement('style');
  styleEl.type = 'text/css';
  styleEl.id = 'manakit-theme-stylesheet';
  document.head.appendChild(styleEl);
}
export default genStyleElement;
