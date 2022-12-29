import React from 'react';
import { render } from '@testing-library/react';
import Circle from '../index';

describe('module Circle', () => {
  test('render Circle without props', () => {
    render(<Circle />);
  });
  test('render Circle with id', () => {
    render(<Circle id="dev" />);
  });
  test('render Circle with className', () => {
    render(<Circle className="dev" />);
  });
  test('render Circle with style', () => {
    render(<Circle style={{ margin: '10px' }} />);
  });
  test('render Circle with props size', () => {
    render(<Circle size={320} />);
  });
  test('render Circle with props minSize', () => {
    render(<Circle minSize={320} />);
  });
  test('render Circle with props maxSize', () => {
    render(<Circle maxSize={320} />);
  });
  test('render Circle with props color', () => {
    render(<Circle color={'primary'} />);
  });
  test('render Circle with props color light', () => {
    render(<Circle color={'primary'} light />);
  });
  test('render Circle with props color dark', () => {
    render(<Circle color={'primary'} dark />);
  });
  test('render Circle with props elevation string / number', () => {
    render(<Circle elevation={10} />);
  });
  test('render Circle with props elevation boolean', () => {
    render(<Circle elevation />);
  });
  test('render Circle with props children', () => {
    render(
      <Circle>
        <p>Hello World</p>
      </Circle>,
    );
  });
});
