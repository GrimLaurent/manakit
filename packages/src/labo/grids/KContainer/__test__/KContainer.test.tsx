import React from 'react';
import { render } from '@testing-library/react';
import KContainer from '../index';

describe('module KContainer', () => {
  test('render KContainer without props', () => {
    render(<KContainer />);
  });
  test('render KContainer with id', () => {
    render(<KContainer id="dev" />);
  });
  test('render KContainer with className', () => {
    render(<KContainer className="dev" />);
  });
  test('render KContainer with style', () => {
    render(<KContainer style={{ margin: '10px' }} />);
  });
  test('render fluid with fluid', () => {
    render(<KContainer fluid />);
  });
  test('render KContainer with fillHeight', () => {
    render(<KContainer fillHeight />);
  });
  test('render KContainer with props children', () => {
    render(
      <KContainer>
        <p>Hello World</p>
      </KContainer>,
    );
  });
});
