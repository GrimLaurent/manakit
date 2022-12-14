import { useColor } from '../color';

describe('useColor', () => {
  test('default value as expected', () => {
    expect(useColor('primary')).toBe('primary');
  });
  test('value as expected', () => {
    expect(useColor('primary', 'secondary')).toBe('secondary');
  });
  test('value as light mode', () => {
    expect(useColor('primary', 'secondary', false, true)).toBe('secondary-light');
  });
  test('value as dark mode', () => {
    expect(useColor('primary', 'secondary', true, false)).toBe('secondary-dark');
  });
  test('default value as light mode', () => {
    expect(useColor('primary', undefined, false, true)).toBe('primary-light');
  });
  test('valdefaultue as dark mode', () => {
    expect(useColor('primary', undefined, true, false)).toBe('primary-dark');
  });
});
