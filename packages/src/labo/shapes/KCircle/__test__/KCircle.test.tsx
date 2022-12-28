import React from 'react';
import { render } from '@testing-library/react';
import KCircle from '../index';

describe('module KCircle', () => {
  test('render KCircle without props', () => {
    render(<KCircle />);
  });
  test('render KCircle with id', () => {
    render(<KCircle id="dev" />);
  });
  test('render KCircle with className', () => {
    render(<KCircle className="dev" />);
  });
  test('render KCircle with style', () => {
    render(<KCircle style={{ margin: '10px' }} />);
  });
  test('render KCircle with props size', () => {
    render(<KCircle size={320} />);
  });
  test('render KCircle with props minSize', () => {
    render(<KCircle minSize={320} />);
  });
  test('render KCircle with props maxSize', () => {
    render(<KCircle maxSize={320} />);
  });
  test('render KCircle with props color', () => {
    render(<KCircle color={'primary'} />);
  });
  test('render KCircle with props color light', () => {
    render(<KCircle color={'primary'} light />);
  });
  test('render KCircle with props color dark', () => {
    render(<KCircle color={'primary'} dark />);
  });
  test('render KCircle with props elevation string / number', () => {
    render(<KCircle elevation={10} />);
  });
  test('render KCircle with props elevation boolean', () => {
    render(<KCircle elevation />);
  });
  test('render KCircle with props children', () => {
    render(
      <KCircle>
        <p>Hello World</p>
      </KCircle>,
    );
  });
});
