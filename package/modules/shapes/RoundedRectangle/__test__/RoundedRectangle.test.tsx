import React from 'react';
import { render } from '@testing-library/react';
import RoundedRectangle from '../index';

describe('module RoundedRectangle', () => {
  test('render RoundedRectangle without props', () => {
    render(<RoundedRectangle />);
  });
  test('render RoundedRectangle with id', () => {
    render(<RoundedRectangle id="dev" />);
  });
  test('render RoundedRectangle with className', () => {
    render(<RoundedRectangle className="dev" />);
  });
  test('render RoundedRectangle with style', () => {
    render(<RoundedRectangle style={{ margin: '10px' }} />);
  });
  test('render RoundedRectangle with props width, height', () => {
    render(<RoundedRectangle height={320} width={320} />);
  });
  test('render RoundedRectangle with props minWidth, minHeight', () => {
    render(<RoundedRectangle minHeight={320} minWidth={320} />);
  });
  test('render RoundedRectangle with props maxWidth, maxHeight', () => {
    render(<RoundedRectangle maxHeight={320} maxWidth={320} />);
  });
  test('render RoundedRectangle with props color', () => {
    render(<RoundedRectangle color={'primary'} />);
  });
  test('render RoundedRectangle with props color light', () => {
    render(<RoundedRectangle color={'primary'} light />);
  });
  test('render RoundedRectangle with props color dark', () => {
    render(<RoundedRectangle color={'primary'} dark />);
  });
  test('render RoundedRectangle with props elevation string / number', () => {
    render(<RoundedRectangle elevation={10} />);
  });
  test('render RoundedRectangle with props elevation boolean', () => {
    render(<RoundedRectangle elevation />);
  });
  test('render RoundedRectangle with props color dark', () => {
    render(<RoundedRectangle color={'primary'} dark />);
  });
  test('render RoundedRectangle with props rounded boolean', () => {
    render(<RoundedRectangle rounded />);
  });
  test('render RoundedRectangle with props rounded string', () => {
    render(<RoundedRectangle rounded={'8px'} />);
  });
  test('render RoundedRectangle with props rounded number', () => {
    render(<RoundedRectangle rounded={12} />);
  });
  test('render RoundedRectangle with props rounded css class', () => {
    render(<RoundedRectangle rounded={'xs'} />);
  });
  test('render RoundedRectangle with props children', () => {
    render(
      <RoundedRectangle>
        <p>Hello World</p>
      </RoundedRectangle>,
    );
  });
});
