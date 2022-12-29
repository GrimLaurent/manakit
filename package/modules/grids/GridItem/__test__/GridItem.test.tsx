import React from 'react';
import { render } from '@testing-library/react';
import GridItem from '../index';

describe('module GridItem', () => {
  test('render GridItem without props', () => {
    render(<GridItem />);
  });
  test('render GridItem with id', () => {
    render(<GridItem id="dev" />);
  });
  test('render GridItem with className', () => {
    render(<GridItem className="dev" />);
  });
  test('render GridItem with style', () => {
    render(<GridItem style={{ margin: '10px' }} />);
  });
  test('render GridItem with alignSlef', () => {
    render(<GridItem alignSlef={'start'} />);
  });
  test('render GridItem with cols', () => {
    render(<GridItem cols={2} />);
  });
  test('render GridItem with xs', () => {
    render(<GridItem xs={2} />);
  });
  test('render GridItem with sm', () => {
    render(<GridItem sm={4} />);
  });
  test('render GridItem with md', () => {
    render(<GridItem md={2} />);
  });
  test('render GridItem with lg', () => {
    render(<GridItem lg={4} />);
  });
  test('render GridItem with xl', () => {
    render(<GridItem xl={4} />);
  });
  test('render GridItem with offset', () => {
    render(<GridItem offset={2} />);
  });
  test('render GridItem with offsetXs', () => {
    render(<GridItem offsetXs={2} />);
  });
  test('render GridItem with offsetSm', () => {
    render(<GridItem offsetSm={4} />);
  });
  test('render GridItem with offsetMd', () => {
    render(<GridItem offsetMd={2} />);
  });
  test('render GridItem with offsetLg', () => {
    render(<GridItem offsetLg={4} />);
  });
  test('render GridItem with offsetXl', () => {
    render(<GridItem offsetXl={4} />);
  });
  test('render GridItem with order', () => {
    render(<GridItem order={2} />);
  });
  test('render GridItem with orderXs', () => {
    render(<GridItem orderXs={2} />);
  });
  test('render GridItem with orderSm', () => {
    render(<GridItem orderSm={4} />);
  });
  test('render GridItem with orderMd', () => {
    render(<GridItem orderMd={2} />);
  });
  test('render GridItem with orderLg', () => {
    render(<GridItem orderLg={4} />);
  });
  test('render GridItem with orderXl', () => {
    render(<GridItem orderXl={4} />);
  });
  test('render GridItem with props children', () => {
    render(
      <GridItem>
        <p>Hello World</p>
      </GridItem>,
    );
  });
});
