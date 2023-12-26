import React from 'react';
import { render } from '@testing-library/react';
import Rectangle from '../index';

describe('module Rectangle', () => {
  test('render Rectangle without props', () => {
    render(<Rectangle />);
  });
  test('render Rectangle with id', () => {
    render(<Rectangle id="dev" />);
  });
  test('render Rectangle with className', () => {
    render(<Rectangle className="dev" />);
  });
  test('render Rectangle with style', () => {
    render(<Rectangle style={{ margin: '10px' }} />);
  });
  test('render Rectangle with props width, height', () => {
    render(<Rectangle height={320} width={320} />);
  });
  test('render Rectangle with props minWidth, minHeight', () => {
    render(<Rectangle minHeight={320} minWidth={320} />);
  });
  test('render Rectangle with props maxWidth, maxHeight', () => {
    render(<Rectangle maxHeight={320} maxWidth={320} />);
  });
  test('render Rectangle with props color', () => {
    render(<Rectangle color={'primary'} />);
  });
  test('render Rectangle with props color light', () => {
    render(<Rectangle color={'primary'} light />);
  });
  test('render Rectangle with props color dark', () => {
    render(<Rectangle color={'primary'} dark />);
  });
  test('render Rectangle with props elevation string / number', () => {
    render(<Rectangle elevation={10} />);
  });
  test('render Rectangle with props elevation boolean', () => {
    render(<Rectangle elevation />);
  });
  test('render Rectangle with props children', () => {
    render(
      <Rectangle>
        <p>Hello World</p>
      </Rectangle>,
    );
  });
});
