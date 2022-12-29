import React from 'react';
import { render } from '@testing-library/react';
import KMain from '../index';

describe('module KMain', () => {
  test('render KMain without props', () => {
    render(<KMain />);
  });
  test('render KMain with id', () => {
    render(<KMain id="dev" />);
  });
  test('render KMain with className', () => {
    render(<KMain className="dev" />);
  });
  test('render KMain with style', () => {
    render(<KMain style={{ margin: '10px' }} />);
  });
  test('render KMain with props children', () => {
    render(
      <KMain>
        <p>Hello World</p>
      </KMain>,
    );
  });
});
