import React from 'react';
import { render } from '@testing-library/react';
import KContent from '../index';

describe('module KContent', () => {
  test('render KContent without props', () => {
    render(<KContent />);
  });
  test('render KContent with id', () => {
    render(<KContent id="dev" />);
  });
  test('render KContent with className', () => {
    render(<KContent className="dev" />);
  });
  test('render KContent with style', () => {
    render(<KContent style={{ margin: '10px' }} />);
  });
  test('render KContent with props children', () => {
    render(
      <KContent>
        <p>Hello World</p>
      </KContent>,
    );
  });
});
