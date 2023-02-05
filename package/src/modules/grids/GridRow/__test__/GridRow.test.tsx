import React from 'react';
import { render } from '@testing-library/react';
import GridRow from '../index';

describe('module GridRow', () => {
  test('render GridRow without props', () => {
    render(<GridRow />);
  });
  test('render GridRow with id', () => {
    render(<GridRow id="dev" />);
  });
  test('render GridRow with className', () => {
    render(<GridRow className="dev" />);
  });
  test('render GridRow with style', () => {
    render(<GridRow style={{ margin: '10px' }} />);
  });
  test('render GridRow with dense', () => {
    render(<GridRow dense />);
  });
  test('render GridRow with noGutters', () => {
    render(<GridRow noGutters />);
  });
  test('render GridRow with align', () => {
    render(<GridRow align={'start'} />);
  });
  test('render GridRow with alignXs', () => {
    render(<GridRow alignXs={'start'} />);
  });
  test('render GridRow with alignSm', () => {
    render(<GridRow alignSm={'start'} />);
  });
  test('render GridRow with alignMd', () => {
    render(<GridRow alignMd={'start'} />);
  });
  test('render GridRow with alignLg', () => {
    render(<GridRow alignLg={'start'} />);
  });
  test('render GridRow with alignXl', () => {
    render(<GridRow alignXl={'start'} />);
  });
  test('render GridRow with alignContent', () => {
    render(<GridRow alignContent={'start'} />);
  });
  test('render GridRow with alignContentXs', () => {
    render(<GridRow alignContentXs={'start'} />);
  });
  test('render GridRow with alignContentSm', () => {
    render(<GridRow alignContentSm={'start'} />);
  });
  test('render GridRow with alignContentMd', () => {
    render(<GridRow alignContentMd={'start'} />);
  });
  test('render GridRow with alignContentLg', () => {
    render(<GridRow alignContentLg={'start'} />);
  });
  test('render GridRow with alignContentXl', () => {
    render(<GridRow alignContentXl={'start'} />);
  });
  test('render GridRow with justify', () => {
    render(<GridRow justify={'start'} />);
  });
  test('render GridRow with justifyXs', () => {
    render(<GridRow justifyXs={'start'} />);
  });
  test('render GridRow with justifySm', () => {
    render(<GridRow justifySm={'start'} />);
  });
  test('render GridRow with justifyMd', () => {
    render(<GridRow justifyMd={'start'} />);
  });
  test('render GridRow with justifyLg', () => {
    render(<GridRow justifyLg={'start'} />);
  });
  test('render GridRow with justifyXl', () => {
    render(<GridRow justifyXl={'start'} />);
  });
  test('render GridRow with props children', () => {
    render(
      <GridRow>
        <p>Hello World</p>
      </GridRow>,
    );
  });
});
