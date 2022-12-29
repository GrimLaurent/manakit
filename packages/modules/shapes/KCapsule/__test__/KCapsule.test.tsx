import React from 'react';
import { render } from '@testing-library/react';
import KCapsule from '../index';

describe('module KCapsule', () => {
  test('render KCapsule without props', () => {
    render(<KCapsule />);
  });
  test('render KCapsule with id', () => {
    render(<KCapsule id="dev" />);
  });
  test('render KCapsule with className', () => {
    render(<KCapsule className="dev" />);
  });
  test('render KCapsule with style', () => {
    render(<KCapsule style={{ margin: '10px' }} />);
  });
  test('render KCapsule with props width, height', () => {
    render(<KCapsule height={320} width={320} />);
  });
  test('render KCapsule with props minWidth, minHeight', () => {
    render(<KCapsule minHeight={320} minWidth={320} />);
  });
  test('render KCapsule with props maxWidth, maxHeight', () => {
    render(<KCapsule maxHeight={320} maxWidth={320} />);
  });
  test('render KCapsule with props color', () => {
    render(<KCapsule color={'primary'} />);
  });
  test('render KCapsule with props color light', () => {
    render(<KCapsule color={'primary'} light />);
  });
  test('render KCapsule with props color dark', () => {
    render(<KCapsule color={'primary'} dark />);
  });
  test('render KCapsule with props elevation string / number', () => {
    render(<KCapsule elevation={10} />);
  });
  test('render KCapsule with props elevation boolean', () => {
    render(<KCapsule elevation />);
  });
  test('render KCapsule with props children', () => {
    render(
      <KCapsule>
        <p>Hello World</p>
      </KCapsule>,
    );
  });
});
