import { useContext } from 'react';
import { ThemeApi, ModeApi } from '../../core';
import formatColorToRgba from './formatColorToRgba';

function useThemeColor(value?: string, modeTheme?: boolean, base?: string) {
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
      return color;
    } else {
      const contextTheme: any = useContext(ThemeApi);
      const constextMode = useContext(ModeApi);
      const mode = modeTheme ? 'dark' : modeTheme === false ? 'light' : constextMode ? 'dark' : 'light';
      const colorList: any = contextTheme?.themes[mode];

      if (colorList[color]) {
        //color key exist !
        if (opacity) {
          formatColorToRgba(colorList[color], opacity);
        } else {
          return colorList[color];
        }
      }
    }
  }

  return value;
}
export default useThemeColor;
