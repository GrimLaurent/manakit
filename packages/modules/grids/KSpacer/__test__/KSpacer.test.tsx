import React from 'react';
import { render } from '@testing-library/react';
import KSpacer from '../index';

describe('module KSpacer', () => {
  test('render KSpacer without props', () => {
    render(<KSpacer />);
  });
  test('render KSpacer with id', () => {
    render(<KSpacer id="dev" />);
  });
  test('render KSpacer with className', () => {
    render(<KSpacer className="dev" />);
  });
  test('render KSpacer with style', () => {
    render(<KSpacer style={{ margin: '10px' }} />);
  });
});
