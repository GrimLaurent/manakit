import { preset } from './../../../../presets/default/index';
// function
import setTheme from '../setTheme';

describe('function setTheme', () => {
  const userPresetTest = {
    primary: 'green',
    anakin: 'pink',
  };

  test('theme mode dark, userPreset undefined', () => {
    expect(setTheme('dark', undefined)).toBe(preset.theme.themes.dark);
  });
  test('theme mode light, userPreset undefined', () => {
    expect(setTheme('light', undefined)).toBe(preset.theme.themes.light);
  });
  test('theme mode dark, userPresetTest', () => {
    expect(setTheme('dark', userPresetTest)).toStrictEqual({ ...preset.theme.themes.dark, ...userPresetTest });
  });
  test('theme mode light, userPresetTest', () => {
    expect(setTheme('light', userPresetTest)).toStrictEqual({ ...preset.theme.themes.light, ...userPresetTest });
  });
});
