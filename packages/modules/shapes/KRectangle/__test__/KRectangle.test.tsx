import React from 'react';
import { render } from '@testing-library/react';
import KRectangle from '../index';

describe('module KRectangle', () => {
  test('render KRectangle without props', () => {
    render(<KRectangle />);
  });
  test('render KRectangle with id', () => {
    render(<KRectangle id="dev" />);
  });
  test('render KRectangle with className', () => {
    render(<KRectangle className="dev" />);
  });
  test('render KRectangle with style', () => {
    render(<KRectangle style={{ margin: '10px' }} />);
  });
  test('render KRectangle with props width, height', () => {
    render(<KRectangle height={320} width={320} />);
  });
  test('render KRectangle with props minWidth, minHeight', () => {
    render(<KRectangle minHeight={320} minWidth={320} />);
  });
  test('render KRectangle with props maxWidth, maxHeight', () => {
    render(<KRectangle maxHeight={320} maxWidth={320} />);
  });
  test('render KRectangle with props color', () => {
    render(<KRectangle color={'primary'} />);
  });
  test('render KRectangle with props color light', () => {
    render(<KRectangle color={'primary'} light />);
  });
  test('render KRectangle with props color dark', () => {
    render(<KRectangle color={'primary'} dark />);
  });
  test('render KRectangle with props elevation string / number', () => {
    render(<KRectangle elevation={10} />);
  });
  test('render KRectangle with props elevation boolean', () => {
    render(<KRectangle elevation />);
  });
  test('render KRectangle with props children', () => {
    render(
      <KRectangle>
        <p>Hello World</p>
      </KRectangle>,
    );
  });
});
