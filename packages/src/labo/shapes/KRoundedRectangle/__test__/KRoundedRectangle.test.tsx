import React from 'react';
import { render } from '@testing-library/react';
import KRoundedRectangle from '../index';

describe('module KRoundedRectangle', () => {
  test('render KRoundedRectangle without props', () => {
    render(<KRoundedRectangle />);
  });
  test('render KRoundedRectangle with id', () => {
    render(<KRoundedRectangle id="dev" />);
  });
  test('render KRoundedRectangle with className', () => {
    render(<KRoundedRectangle className="dev" />);
  });
  test('render KRoundedRectangle with style', () => {
    render(<KRoundedRectangle style={{ margin: '10px' }} />);
  });
  test('render KRoundedRectangle with props width, height', () => {
    render(<KRoundedRectangle height={320} width={320} />);
  });
  test('render KRoundedRectangle with props minWidth, minHeight', () => {
    render(<KRoundedRectangle minHeight={320} minWidth={320} />);
  });
  test('render KRoundedRectangle with props maxWidth, maxHeight', () => {
    render(<KRoundedRectangle maxHeight={320} maxWidth={320} />);
  });
  test('render KRoundedRectangle with props color', () => {
    render(<KRoundedRectangle color={'primary'} />);
  });
  test('render KRoundedRectangle with props color light', () => {
    render(<KRoundedRectangle color={'primary'} light />);
  });
  test('render KRoundedRectangle with props color dark', () => {
    render(<KRoundedRectangle color={'primary'} dark />);
  });
  test('render KRoundedRectangle with props elevation string / number', () => {
    render(<KRoundedRectangle elevation={10} />);
  });
  test('render KRoundedRectangle with props elevation boolean', () => {
    render(<KRoundedRectangle elevation />);
  });
  test('render KRoundedRectangle with props color dark', () => {
    render(<KRoundedRectangle color={'primary'} dark />);
  });
  test('render KRoundedRectangle with props rounded boolean', () => {
    render(<KRoundedRectangle rounded />);
  });
  test('render KRoundedRectangle with props rounded string', () => {
    render(<KRoundedRectangle rounded={'8px'} />);
  });
  test('render KRoundedRectangle with props rounded number', () => {
    render(<KRoundedRectangle rounded={12} />);
  });
  test('render KRoundedRectangle with props rounded css class', () => {
    render(<KRoundedRectangle rounded={'xs'} />);
  });
  test('render KRoundedRectangle with props children', () => {
    render(
      <KRoundedRectangle>
        <p>Hello World</p>
      </KRoundedRectangle>,
    );
  });
});
