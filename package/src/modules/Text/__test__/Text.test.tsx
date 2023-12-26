import React from 'react';
import { render } from '@testing-library/react';
import Text from '../index';

describe('module Text', () => {
  test('render Text without props', () => {
    render(<Text />);
  });
  test('render Text with id', () => {
    render(<Text id="dev" />);
  });
  test('render Text with className', () => {
    render(<Text className="dev" />);
  });
  test('render Text with style', () => {
    render(<Text style={{ margin: '10px' }} />);
  });
  test('render Text with props width, height', () => {
    render(<Text frame={{ height: 320, width: 320 }} />);
  });
  test('render Text with props minWidth, minHeight', () => {
    render(<Text frame={{ minHeight: 320, minWidth: 320 }} />);
  });
  test('render Text with props maxWidth, maxHeight', () => {
    render(<Text frame={{ maxHeight: 320, maxWidth: 320 }} />);
  });
  test('render Text with props alt', () => {
    render(<Text alt="h1" />);
  });
  test('render Text with props italic', () => {
    render(<Text italic />);
  });
  test('render Text with props font default', () => {
    render(<Text font={{ default: 'h1' }} />);
  });
  test('render Text with props font media screen', () => {
    render(<Text font={{ default: 'h1', xs: 'h2', sm: 'h3', md: 'h4', lg: 'h5', xl: 'button' }} />);
  });
  test('render Text with props font weight', () => {
    render(<Text font={{ weight: 'bold' }} />);
  });
  test('render Text with props font size string', () => {
    render(<Text font={{ size: '15em' }} />);
  });
  test('render Text with props font size number', () => {
    render(<Text font={{ size: 15 }} />);
  });
  test('render Text with props font decoration', () => {
    render(<Text font={{ decoration: 'overline' }} />);
  });
  test('render Text with props font transform', () => {
    render(<Text font={{ transform: 'uppercase' }} />);
  });
  test('render Text with props alignement default', () => {
    render(<Text alignement={{ default: 'center' }} />);
  });
  test('render Text with props alignement default and mediaquery', () => {
    render(
      <Text alignement={{ default: 'center', xs: 'center', sm: 'justify', md: 'center', lg: 'justify', xl: 'left' }} />,
    );
  });
  test('render Text with props primary', () => {
    render(<Text primary />);
  });
  test('render Text with props secondary', () => {
    render(<Text secondary />);
  });
  test('render Text with props disabled', () => {
    render(<Text disabled />);
  });

  test('render Text with props children', () => {
    render(<Text>Hello World</Text>);
  });
});
