import React from 'react';
import { render } from '@testing-library/react';
import ToolbarTitle from '../toolbar-title';

describe('ToolbarTitle ', () => {
  test('render ToolbarTitle without props', () => {
    render(<ToolbarTitle />);
  });

  test('render ToolbarTitle with props id', () => {
    render(<ToolbarTitle id={'testId'} />);
  });

  test('render ToolbarTitle with props className', () => {
    render(<ToolbarTitle className={'test-class-name'} />);
  });

  test('render ToolbarTitle with props style', () => {
    render(<ToolbarTitle style={{ color: 'red' }} />);
  });

  test('render ToolbarTitle with props children', () => {
    render(<ToolbarTitle>Hello World</ToolbarTitle>);
  });

  //Render full
  test('render ToolbarTitle with all props', () => {
    render(
      <ToolbarTitle id={'testId'} className={'test-class-name'} style={{ color: 'red' }}>
        Hello World
      </ToolbarTitle>,
    );
  });
});
