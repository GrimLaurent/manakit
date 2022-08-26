import React from 'react';
import { render } from '@testing-library/react';
import App from '../index';

describe('App', () => {
  test('render App without props', () => {
    render(<App />);
  });

  test('render App with props noSSR', () => {
    render(<App noSSR />);
  });

  test('render App with props id', () => {
    render(<App id={'testId'} />);
  });

  test('render App with props className', () => {
    render(<App className={'test-class-name'} />);
  });

  test('render App with props style', () => {
    render(<App style={{ background: 'red' }} />);
  });

  test('render App with props children', () => {
    render(
      <App>
        <p>Hello World</p>
      </App>,
    );
  });

  //Render full
  test('render App with all props + SSR', () => {
    render(
      <App id={'testId'} className={'test-class-name'} style={{ background: 'red' }}>
        <p>Hello World</p>
      </App>,
    );
  });

  test('render App with all props + noSSR', () => {
    render(
      <App id={'testId'} className={'test-class-name'} style={{ background: 'red' }} noSSR>
        <p>Hello World</p>
      </App>,
    );
  });
});
