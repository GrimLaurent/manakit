import useIdHtml from '../useIdHtml';

describe('useIdHtml', () => {
  test('Id as expected', () => {
    expect(useIdHtml('myId')).toBe('myId');
  });

  test('string is empty as expected', () => {
    expect(useIdHtml('')).toBe('');
  });

  test('string is undefined as expected', () => {
    expect(useIdHtml(undefined)).toBe('');
  });
});
