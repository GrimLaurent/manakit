import { CoreThemeType } from './../../types';
import formatColorToRgba from './formatColorToRgba';

function getColor(theme: CoreThemeType, value?: any, base?: any, mode?: any) {
  let colorStringify;
  let color;
  let opacity;

  if (value || base) {
    if (value) {
      colorStringify = value.split(' ');
    } else if (base) {
      colorStringify = base.split(' ');
    }
  }

  if (colorStringify) {
    color = colorStringify[0];
    opacity = colorStringify[1];
  }

  if (color) {
    if (color.includes('#')) {
      // isHexa
      if (opacity) {
        formatColorToRgba(color, opacity);
      } else {
        return color;
      }
    } else {
      const colorMode = mode ? mode : theme.mode.use;
      const colorList: any = theme.themes[colorMode];
      const colorListInvert: any = theme.themes[colorMode === 'dark' ? 'light' : 'dark'];

      if (colorList[color]) {
        //color key exist !
        if (opacity) {
          formatColorToRgba(colorList[color], opacity);
        } else {
          return colorList[color];
        }
      } else if (colorListInvert[color]) {
        // color key no exist in select list, search in invert list
        if (opacity) {
          formatColorToRgba(colorListInvert[color], opacity);
        } else {
          return colorListInvert[color];
        }
      }
    }
  }

  return value;
}
export default getColor;
