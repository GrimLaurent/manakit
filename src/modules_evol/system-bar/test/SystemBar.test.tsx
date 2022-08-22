import React from 'react';
import { render } from '@testing-library/react';
import SystemBar from '../index';

describe('SystemBar', () => {
  test('render SystemBar without props', () => {
    render(<SystemBar />);
  });

  test('render SystemBar with props basic', () => {
    const { container } = render(<SystemBar id={'testID'} className={'testClass'} />);
    const id = document.getElementById('testID');
    const className = container.firstChild;

    expect(id).toBeTruthy;
    expect(className).toHaveClass('testClass');
  });

  test('render SystemBar with props absolute', () => {
    const { container } = render(<SystemBar absolute />);
    expect(container.firstChild).toHaveClass('system-bar--absolute');
  });

  test('render SystemBar with props fixed', () => {
    const { container } = render(<SystemBar fixed />);
    expect(container.firstChild).toHaveClass('system-bar--fixed');
  });

  test('render SystemBar with props app', () => {
    const { container } = render(<SystemBar app />);
    expect(container.firstChild).toHaveClass('system-bar--fixed');
  });

  test('render SystemBar with props style', () => {
    render(<SystemBar style={{ background: 'red' }} />);
  });

  test('render SystemBar with props children', () => {
    render(
      <SystemBar>
        <p>Hello World</p>
      </SystemBar>,
    );
  });
});
