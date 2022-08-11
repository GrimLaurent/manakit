import { useContext } from 'react';
import { ThemeApi, ModeApi } from '../../core';
import formatColorToRgba from './formatColorToRgba';

function useThemeColor(value?: string, modeTheme?: boolean) {
  if (value) {
    const colorStringify = value.split(' ');
    const color = colorStringify[0];
    const opacity = colorStringify[1];

    if (color.includes('#')) {
      // isHexa
      return color;
    } else {
      // ThemeAPi
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
