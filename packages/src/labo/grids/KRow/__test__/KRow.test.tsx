import React from 'react';
import { render } from '@testing-library/react';
import KRow from '../index';

describe('module KRow', () => {
  test('render KRow without props', () => {
    render(<KRow />);
  });
  test('render KRow with id', () => {
    render(<KRow id="dev" />);
  });
  test('render KRow with className', () => {
    render(<KRow className="dev" />);
  });
  test('render KRow with style', () => {
    render(<KRow style={{ margin: '10px' }} />);
  });
  test('render KRow with dense', () => {
    render(<KRow dense />);
  });
  test('render KRow with noGutters', () => {
    render(<KRow noGutters />);
  });
  test('render KRow with align', () => {
    render(<KRow align={'start'} />);
  });
  test('render KRow with alignXs', () => {
    render(<KRow alignXs={'start'} />);
  });
  test('render KRow with alignSm', () => {
    render(<KRow alignSm={'start'} />);
  });
  test('render KRow with alignMd', () => {
    render(<KRow alignMd={'start'} />);
  });
  test('render KRow with alignLg', () => {
    render(<KRow alignLg={'start'} />);
  });
  test('render KRow with alignXl', () => {
    render(<KRow alignXl={'start'} />);
  });
  test('render KRow with alignContent', () => {
    render(<KRow alignContent={'start'} />);
  });
  test('render KRow with alignContentXs', () => {
    render(<KRow alignContentXs={'start'} />);
  });
  test('render KRow with alignContentSm', () => {
    render(<KRow alignContentSm={'start'} />);
  });
  test('render KRow with alignContentMd', () => {
    render(<KRow alignContentMd={'start'} />);
  });
  test('render KRow with alignContentLg', () => {
    render(<KRow alignContentLg={'start'} />);
  });
  test('render KRow with alignContentXl', () => {
    render(<KRow alignContentXl={'start'} />);
  });
  test('render KRow with justify', () => {
    render(<KRow justify={'start'} />);
  });
  test('render KRow with justifyXs', () => {
    render(<KRow justifyXs={'start'} />);
  });
  test('render KRow with justifySm', () => {
    render(<KRow justifySm={'start'} />);
  });
  test('render KRow with justifyMd', () => {
    render(<KRow justifyMd={'start'} />);
  });
  test('render KRow with justifyLg', () => {
    render(<KRow justifyLg={'start'} />);
  });
  test('render KRow with justifyXl', () => {
    render(<KRow justifyXl={'start'} />);
  });
  test('render KRow with props children', () => {
    render(
      <KRow>
        <p>Hello World</p>
      </KRow>,
    );
  });
});
