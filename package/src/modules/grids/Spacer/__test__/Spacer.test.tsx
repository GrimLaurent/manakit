import React from 'react';
import { render } from '@testing-library/react';
import Spacer from '../index';

describe('module Spacer', () => {
  test('render Spacer without props', () => {
    render(<Spacer />);
  });
  test('render Spacer with id', () => {
    render(<Spacer id="dev" />);
  });
  test('render Spacer with className', () => {
    render(<Spacer className="dev" />);
  });
  test('render Spacer with style', () => {
    render(<Spacer style={{ margin: '10px' }} />);
  });
});
