import useClassHtml from '../useClassHtml';

describe('useClassHtml', () => {
  const propsClassName = 'developer-class';
  const componentClass = [
    { el: 'elevation', val: 2 },
    { el: 'theme--dark', val: true },
    { el: 'theme--light', val: false },
  ];

  test('initial class as expected', () => {
    expect(useClassHtml('default-class')).toBe('default-class');
  });

  test('inital + className props as expected  ', () => {
    expect(useClassHtml('default-class', propsClassName)).toBe('default-class developer-class');
  });

  test('inital + className props + class by composant as expected  ', () => {
    expect(useClassHtml('default-class', propsClassName, componentClass)).toBe(
      'default-class elevation-2 theme--dark developer-class',
    );
  });

  test('inital + class by composant without className props as expected  ', () => {
    expect(useClassHtml('default-class', undefined, componentClass)).toBe('default-class elevation-2 theme--dark');
  });
});
