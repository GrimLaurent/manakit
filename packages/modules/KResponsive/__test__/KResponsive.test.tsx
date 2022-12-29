import React from 'react';
import { render } from '@testing-library/react';
import KResponsive from '../index';

describe('module KResponsive', () => {
  test('render KResponsive without props', () => {
    render(<KResponsive />);
  });
  test('render KResponsive with id', () => {
    render(<KResponsive id="dev" />);
  });
  test('render KResponsive with className', () => {
    render(<KResponsive className="dev" />);
  });
  test('render KResponsive with contentClass', () => {
    render(<KResponsive contentClass="dev" />);
  });
  test('render KResponsive with fillHeight', () => {
    render(<KResponsive fillHeight />);
  });
  test('render KResponsive with style', () => {
    render(<KResponsive style={{ margin: '10px' }} />);
  });
  test('render KResponsive with props width, height', () => {
    render(<KResponsive height={320} width={320} />);
  });
  test('render KResponsive with props minWidth, minHeight', () => {
    render(<KResponsive minHeight={320} minWidth={320} />);
  });
  test('render KResponsive with props maxWidth, maxHeight', () => {
    render(<KResponsive maxHeight={320} maxWidth={320} />);
  });
  test('render KResponsive with props aspectRatio string', () => {
    render(<KResponsive aspectRatio={'16/9'} />);
  });
  test('render KResponsive with props aspectRatio value', () => {
    render(<KResponsive aspectRatio={16 / 9} />);
  });
  test('render KResponsive with props children', () => {
    render(
      <KResponsive>
        <p>Hello World</p>
      </KResponsive>,
    );
  });
});
