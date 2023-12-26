import React from 'react';
import { render } from '@testing-library/react';
import Img from '../index';

describe('module Img', () => {
  test('render Img without props', () => {
    render(<Img src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with id', () => {
    render(<Img id="dev" src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with className', () => {
    render(<Img className="dev" src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with contentClass', () => {
    render(<Img contentClass="dev" src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with fillHeight', () => {
    render(<Img fillHeight src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with style', () => {
    render(<Img style={{ margin: '10px' }} src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with props width, height', () => {
    render(<Img frame={{ height: 320, width: 320 }} src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with props minWidth, minHeight', () => {
    render(<Img frame={{ minHeight: 320, minWidth: 320 }} src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with props maxWidth, maxHeight', () => {
    render(<Img frame={{ maxHeight: 320, maxWidth: 320 }} src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with props aspectRatio string', () => {
    render(<Img aspectRatio={'16/9'} src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with props aspectRatio value', () => {
    render(<Img aspectRatio={16 / 9} src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with props contain', () => {
    render(<Img contain src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with props position', () => {
    render(<Img position="top left" src="https://picsum.photos/id/11/500/300" />);
  });
  test('render Img with props alt', () => {
    render(<Img alt="demo img" src="https://picsum.photos/id/11/500/300" />);
  });
});
