import React from 'react';
import { render } from '@testing-library/react';
import Appkit from '../index';

describe('App', () => {
  test('render App without props', () => {
    render(<Appkit />);
  });

  test('render App with props id', () => {
    render(<Appkit id={'testId'} />);
  });

  test('render App with props className', () => {
    render(<Appkit className={'test-class-name'} />);
  });

  test('render App with props style', () => {
    render(<Appkit style={{ background: 'red' }} />);
  });

  test('render App with props children', () => {
    render(
      <Appkit>
        <p>Hello World</p>
      </Appkit>,
    );
  });

  //Render full
  test('render App with all props + SSR', () => {
    render(
      <Appkit id={'testId'} className={'test-class-name'} style={{ background: 'red' }}>
        <p>Hello World</p>
      </Appkit>,
    );
  });

  test('render App with all props + noSSR', () => {
    render(
      <Appkit id={'testId'} className={'test-class-name'} style={{ background: 'red' }}>
        <p>Hello World</p>
      </Appkit>,
    );
  });
});
