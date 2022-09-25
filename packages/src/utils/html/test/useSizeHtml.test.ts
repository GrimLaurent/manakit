import useSizeHtml from '../useSizeHtml';

describe('useSizeHtml', () => {
  test('value is undefined', () => {
    expect(useSizeHtml(undefined)).toBe(undefined);
  });

  test('value is number', () => {
    expect(useSizeHtml(350)).toBe('350px');
  });

  test('value is string no unit', () => {
    expect(useSizeHtml('350')).toBe('350px');
  });

  test('value is string and have unit', () => {
    expect(useSizeHtml('350%')).toBe('350%');
  });

  test('value is string and is not size', () => {
    expect(useSizeHtml('bonjour')).toBe('bonjour');
  });

  test('value is string with no charactere', () => {
    expect(useSizeHtml('')).toBe('');
  });
});
