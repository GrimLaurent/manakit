import React from 'react';
import { render } from '@testing-library/react';
import KApp from '../index';
import { presetTestnoSSR, presetTestSSR } from './__snapshots__/presetKApp';

describe('module KApp', () => {
  test('render KApp without props', () => {
    render(<KApp />);
  });

  test('render KApp with props id', () => {
    render(<KApp id={'testId'} />);
  });

  test('render KApp with props className', () => {
    render(<KApp className={'test-class-name'} />);
  });

  test('render KApp with props style', () => {
    render(<KApp style={{ background: 'red' }} />);
  });

  test('render KApp with props children', () => {
    render(
      <KApp>
        <p>Hello World</p>
      </KApp>,
    );
  });

  //Render basic
  test('render KApp with props id , className, style and children', () => {
    render(
      <KApp id={'testId'} className={'test-class-name'} style={{ background: 'red' }}>
        <p>Hello World</p>
      </KApp>,
    );
  });

  //Render with set props (theming and config)
  test('render KApp with SSR', () => {
    render(
      <KApp set={presetTestSSR}>
        <p>Hello World</p>
      </KApp>,
    );
  });

  test('render KApp without SSR', () => {
    render(
      <KApp set={presetTestnoSSR}>
        <p>Hello World</p>
      </KApp>,
    );
  });

  // All props
  test('render KApp with all props', () => {
    render(
      <KApp id={'testId'} className={'test-class-name'} style={{ background: 'red' }} set={presetTestnoSSR}>
        <p>Hello World</p>
      </KApp>,
    );
  });

  test('render KApp with all props and mode SSR', () => {
    render(
      <KApp id={'testId'} className={'test-class-name'} style={{ background: 'red' }} set={presetTestSSR}>
        <p>Hello World</p>
      </KApp>,
    );
  });
});
