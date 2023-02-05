import React from 'react';
import { render } from '@testing-library/react';
import Capsule from '../index';

describe('module Capsule', () => {
  test('render Capsule without props', () => {
    render(<Capsule />);
  });
  test('render Capsule with id', () => {
    render(<Capsule id="dev" />);
  });
  test('render Capsule with className', () => {
    render(<Capsule className="dev" />);
  });
  test('render Capsule with style', () => {
    render(<Capsule style={{ margin: '10px' }} />);
  });
  test('render Capsule with props width, height', () => {
    render(<Capsule height={320} width={320} />);
  });
  test('render Capsule with props minWidth, minHeight', () => {
    render(<Capsule minHeight={320} minWidth={320} />);
  });
  test('render Capsule with props maxWidth, maxHeight', () => {
    render(<Capsule maxHeight={320} maxWidth={320} />);
  });
  test('render Capsule with props color', () => {
    render(<Capsule color={'primary'} />);
  });
  test('render Capsule with props color light', () => {
    render(<Capsule color={'primary'} light />);
  });
  test('render Capsule with props color dark', () => {
    render(<Capsule color={'primary'} dark />);
  });
  test('render Capsule with props elevation string / number', () => {
    render(<Capsule elevation={10} />);
  });
  test('render Capsule with props elevation boolean', () => {
    render(<Capsule elevation />);
  });
  test('render Capsule with props children', () => {
    render(
      <Capsule>
        <p>Hello World</p>
      </Capsule>,
    );
  });
});
