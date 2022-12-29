import React from 'react';
import { render } from '@testing-library/react';
import Responsive from '../index';

describe('module Responsive', () => {
  test('render Responsive without props', () => {
    render(<Responsive />);
  });
  test('render Responsive with id', () => {
    render(<Responsive id="dev" />);
  });
  test('render Responsive with className', () => {
    render(<Responsive className="dev" />);
  });
  test('render Responsive with contentClass', () => {
    render(<Responsive contentClass="dev" />);
  });
  test('render Responsive with fillHeight', () => {
    render(<Responsive fillHeight />);
  });
  test('render Responsive with style', () => {
    render(<Responsive style={{ margin: '10px' }} />);
  });
  test('render Responsive with props width, height', () => {
    render(<Responsive height={320} width={320} />);
  });
  test('render Responsive with props minWidth, minHeight', () => {
    render(<Responsive minHeight={320} minWidth={320} />);
  });
  test('render Responsive with props maxWidth, maxHeight', () => {
    render(<Responsive maxHeight={320} maxWidth={320} />);
  });
  test('render Responsive with props aspectRatio string', () => {
    render(<Responsive aspectRatio={'16/9'} />);
  });
  test('render Responsive with props aspectRatio value', () => {
    render(<Responsive aspectRatio={16 / 9} />);
  });
  test('render Responsive with props children', () => {
    render(
      <Responsive>
        <p>Hello World</p>
      </Responsive>,
    );
  });
});
