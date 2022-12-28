import React from 'react';
import { render } from '@testing-library/react';
import KCol from '../index';

describe('module KCol', () => {
  test('render KCol without props', () => {
    render(<KCol />);
  });
  test('render KCol with id', () => {
    render(<KCol id="dev" />);
  });
  test('render KCol with className', () => {
    render(<KCol className="dev" />);
  });
  test('render KCol with style', () => {
    render(<KCol style={{ margin: '10px' }} />);
  });
  test('render KCol with alignSlef', () => {
    render(<KCol alignSlef={'start'} />);
  });
  test('render KCol with cols', () => {
    render(<KCol cols={2} />);
  });
  test('render KCol with xs', () => {
    render(<KCol xs={2} />);
  });
  test('render KCol with sm', () => {
    render(<KCol sm={4} />);
  });
  test('render KCol with md', () => {
    render(<KCol md={2} />);
  });
  test('render KCol with lg', () => {
    render(<KCol lg={4} />);
  });
  test('render KCol with xl', () => {
    render(<KCol xl={4} />);
  });
  test('render KCol with offset', () => {
    render(<KCol offset={2} />);
  });
  test('render KCol with offsetXs', () => {
    render(<KCol offsetXs={2} />);
  });
  test('render KCol with offsetSm', () => {
    render(<KCol offsetSm={4} />);
  });
  test('render KCol with offsetMd', () => {
    render(<KCol offsetMd={2} />);
  });
  test('render KCol with offsetLg', () => {
    render(<KCol offsetLg={4} />);
  });
  test('render KCol with offsetXl', () => {
    render(<KCol offsetXl={4} />);
  });
  test('render KCol with order', () => {
    render(<KCol order={2} />);
  });
  test('render KCol with orderXs', () => {
    render(<KCol orderXs={2} />);
  });
  test('render KCol with orderSm', () => {
    render(<KCol orderSm={4} />);
  });
  test('render KCol with orderMd', () => {
    render(<KCol orderMd={2} />);
  });
  test('render KCol with orderLg', () => {
    render(<KCol orderLg={4} />);
  });
  test('render KCol with orderXl', () => {
    render(<KCol orderXl={4} />);
  });
  test('render KCol with props children', () => {
    render(
      <KCol>
        <p>Hello World</p>
      </KCol>,
    );
  });
});
