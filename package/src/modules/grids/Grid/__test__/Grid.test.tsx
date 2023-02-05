import React from 'react';
import { render } from '@testing-library/react';
import Grid from '../index';

describe('module Grid', () => {
  test('render Grid without props', () => {
    render(<Grid />);
  });
  test('render Grid with id', () => {
    render(<Grid id="dev" />);
  });
  test('render Grid with className', () => {
    render(<Grid className="dev" />);
  });
  test('render Grid with style', () => {
    render(<Grid style={{ margin: '10px' }} />);
  });
  test('render fluid with fluid', () => {
    render(<Grid fluid />);
  });
  test('render Grid with fillHeight', () => {
    render(<Grid fillHeight />);
  });
  test('render Grid with props children', () => {
    render(
      <Grid>
        <p>Hello World</p>
      </Grid>,
    );
  });
});
