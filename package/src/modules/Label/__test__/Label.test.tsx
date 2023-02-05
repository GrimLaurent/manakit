import React from 'react';
import { render } from '@testing-library/react';
import Label from '../index';

describe('module Label', () => {
  test('render Label without props', () => {
    render(<Label />);
  });
  test('render Label with id', () => {
    render(<Label id="dev" />);
  });
  test('render Label with className', () => {
    render(<Label className="dev" />);
  });
  test('render Label with style', () => {
    render(<Label style={{ margin: '10px' }} />);
  });
  test('render Label with props width, height', () => {
    render(<Label frame={{ height: 320, width: 320 }} />);
  });
  test('render Label with props minWidth, minHeight', () => {
    render(<Label frame={{ minHeight: 320, minWidth: 320 }} />);
  });
  test('render Label with props maxWidth, maxHeight', () => {
    render(<Label frame={{ maxHeight: 320, maxWidth: 320 }} />);
  });
  test('render Label with props children', () => {
    render(<Label>Hello World</Label>);
  });
});
