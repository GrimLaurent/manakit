import React from 'react';
import { render } from '@testing-library/react';
import ToolbarItems from '../toolbar-items';

describe('ToolbarItems ', () => {
  test('render ToolbarItems without props', () => {
    render(<ToolbarItems />);
  });

  test('render ToolbarItems with props id', () => {
    render(<ToolbarItems id={'testId'} />);
  });

  test('render ToolbarItems with props className', () => {
    render(<ToolbarItems className={'test-class-name'} />);
  });

  test('render ToolbarItems with props style', () => {
    render(<ToolbarItems style={{ background: 'red' }} />);
  });

  test('render ToolbarItems with props children', () => {
    render(
      <ToolbarItems>
        <div>Items</div>
        <div>Items 2</div>
        <div>Items 3</div>
      </ToolbarItems>,
    );
  });

  //Render full
  test('render ToolbarItems with all props', () => {
    render(
      <ToolbarItems id={'testId'} className={'test-class-name'} style={{ color: 'red' }}>
        <div>Items</div>
        <div>Items 2</div>
        <div>Items 3</div>
      </ToolbarItems>,
    );
  });
});
