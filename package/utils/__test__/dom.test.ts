import { useId, useClassName, useStyle, useSize } from '../dom';
import {
  propsClassName,
  componentClassNameWithStringParams,
  componentClassNameWithNumberParams,
  componentClassNameWithBooleanParams,
  componentClass,
} from './__snapshots__/dom';

describe('useId', () => {
  test('value as expected', () => {
    expect(useId('myId')).toBe('myId');
  });

  test('value is empty as expected', () => {
    expect(useId('')).toBe('');
  });

  test('value is undefined as expected', () => {
    expect(useId(undefined)).toBe('');
  });
});

describe('useClassName', () => {
  test('default value as expected', () => {
    expect(useClassName('default-class')).toBe('default-class');
  });

  test('default value as undefined', () => {
    expect(useClassName(undefined)).toBe('');
  });

  test('props value as expected', () => {
    expect(useClassName(undefined, propsClassName)).toBe('developer-class');
  });

  test('component value as expected (params String)', () => {
    expect(useClassName(undefined, undefined, componentClassNameWithStringParams)).toBe('rounded-pill');
  });

  test('component value as expected (params Number)', () => {
    expect(useClassName(undefined, undefined, componentClassNameWithNumberParams)).toBe('elevation-2');
  });

  test('component value as expected (params Boolean)', () => {
    expect(useClassName(undefined, undefined, componentClassNameWithBooleanParams)).toBe('theme--dark');
  });

  test('default value & props value as expected', () => {
    expect(useClassName('default-class', propsClassName)).toBe('default-class developer-class');
  });

  test('default value & props value & component value as expected', () => {
    expect(useClassName('default-class', propsClassName, componentClass)).toBe(
      'default-class elevation-2 rounded-pill theme--dark developer-class',
    );
  });
});

describe('useStyle', () => {
  test('value as expected', () => {
    expect(useStyle({ margin: 'top' })).toStrictEqual({ margin: 'top' });
  });

  test('value undefined as expected', () => {
    expect(useStyle(undefined)).toStrictEqual({});
  });

  test('props value as expected', () => {
    expect(useStyle(undefined, { margin: 'bottom' })).toStrictEqual({ margin: 'bottom' });
  });

  test('additional value as expected', () => {
    expect(useStyle(undefined, undefined, { margin: 'left' })).toStrictEqual({ margin: 'left' });
  });

  test('props value & additional value as expected', () => {
    expect(useStyle(undefined, { top: '50px' }, { margin: 'left' })).toStrictEqual({
      top: '50px',
      margin: 'left',
    });
  });

  test('value & additional value as expected', () => {
    expect(useStyle({ top: '50px' }, undefined, { margin: 'left' })).toStrictEqual({
      top: '50px',
      margin: 'left',
    });
  });

  test('value & props.value & additional value as expected', () => {
    expect(useStyle({ top: '50px' }, { position: 'fixed' }, { margin: 'left' })).toStrictEqual({
      position: 'fixed',
      top: '50px',
      margin: 'left',
    });
  });

  test('value & props.value  as conflict & additional value as expected', () => {
    expect(useStyle({ top: '50px' }, { position: 'fixed' }, { top: '25px' })).toStrictEqual({
      top: '25px',
      position: 'fixed',
    });
  });

  test('value & additional & props.value as conflict value as expected', () => {
    expect(useStyle({ position: 'fixed' }, { top: '50px' }, { top: '25px' })).toStrictEqual({
      top: '25px',
      position: 'fixed',
    });
  });
});

describe('useSize', () => {
  test('value is undefined', () => {
    expect(useSize(undefined)).toBe(undefined);
  });
  test('value is number', () => {
    expect(useSize(350)).toBe('350px');
  });
  test('value is string and have unit', () => {
    expect(useSize('350%')).toBe('350%');
  });
  test('value is string and is not size', () => {
    expect(useSize('bonjour')).toBe('bonjour');
  });
  test('value is string with no charactere', () => {
    expect(useSize('')).toBe('0px');
  });
});
