import React from 'react';
import { render } from '@testing-library/react';
import View from '../index';

describe('module View', () => {
  test('render View without props', () => {
    render(<View />);
  });
  test('render View with id', () => {
    render(<View id="dev" />);
  });
  test('render View with className', () => {
    render(<View className="dev" />);
  });
  test('render View with style', () => {
    render(<View style={{ margin: '10px' }} />);
  });
  test('render View with props children', () => {
    render(
      <View>
        <p>Hello World</p>
      </View>,
    );
  });
});
