import React from 'react';
import { render } from '@testing-library/react';
import App from '../index';
import { presetTestnoSSR, presetTestSSR } from './__snapshots__/presetApp';

describe('module App', () => {
  test('render App without props', () => {
    render(<App />);
  });

  test('render App with props id', () => {
    render(<App id={'testId'} />);
  });

  test('render App with props className', () => {
    render(<App className={'test-class-name'} />);
  });

  test('render KApp with props style', () => {
    render(<App style={{ background: 'red' }} />);
  });

  test('render App with props children', () => {
    render(
      <App>
        <p>Hello World</p>
      </App>,
    );
  });

  // render basic
  test('render App with props id , className, style and children', () => {
    render(
      <App id={'testId'} className={'test-class-name'} style={{ background: 'red' }}>
        <p>Hello World</p>
      </App>,
    );
  });

  // render with set props (theming and config)
  test('render App with SSR', () => {
    render(
      <App set={presetTestSSR}>
        <p>Hello World</p>
      </App>,
    );
  });

  test('render App without SSR', () => {
    render(
      <App set={presetTestnoSSR}>
        <p>Hello World</p>
      </App>,
    );
  });

  // all props
  test('render App with all props', () => {
    render(
      <App id={'testId'} className={'test-class-name'} style={{ background: 'red' }} set={presetTestnoSSR}>
        <p>Hello World</p>
      </App>,
    );
  });

  test('render App with all props and mode SSR', () => {
    render(
      <App id={'testId'} className={'test-class-name'} style={{ background: 'red' }} set={presetTestSSR}>
        <p>Hello World</p>
      </App>,
    );
  });
});
