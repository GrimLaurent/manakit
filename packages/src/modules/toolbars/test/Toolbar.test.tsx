import React from 'react';
import { render } from '@testing-library/react';
import Toolbar from '../toolbar';

describe('Toolbar ', () => {
  test('render Toolbar without props', () => {
    render(<Toolbar />);
  });

  test('render Toolbar with props id', () => {
    render(<Toolbar id={'testId'} />);
  });

  test('render Toolbar with props className', () => {
    render(<Toolbar className={'test-class-name'} />);
  });

  test('render Toolbar with props contentClass', () => {
    render(<Toolbar contentClass={'test-class-name'} />);
  });

  test('render Toolbar with props style', () => {
    render(<Toolbar style={{ background: 'red' }} />);
  });

  test('render Toolbar with props elevation', () => {
    render(<Toolbar elevation={6} />);
  });

  test('render Toolbar with props outlined', () => {
    render(<Toolbar outlined />);
  });

  test('render Toolbar with props rounded', () => {
    render(<Toolbar rounded />);
  });

  test('render Toolbar with props rounded value', () => {
    render(<Toolbar rounded={'xs'} />);
  });

  test('render Toolbar with props shaped', () => {
    render(<Toolbar shaped />);
  });

  test('render Toolbar with props tile', () => {
    render(<Toolbar tile />);
  });

  test('render Toolbar with props width', () => {
    render(<Toolbar width={'130px'} />);
  });

  test('render Toolbar with props height', () => {
    render(<Toolbar height={'130px'} />);
  });

  test('render Toolbar with props minWidth', () => {
    render(<Toolbar minWidth={'130px'} />);
  });

  test('render Toolbar with props maxWidth', () => {
    render(<Toolbar maxWidth={'130px'} />);
  });

  test('render Toolbar with props minHeight', () => {
    render(<Toolbar minHeight={'130px'} />);
  });

  test('render Toolbar with props maxHeight', () => {
    render(<Toolbar maxHeight={'130px'} />);
  });

  test('render Toolbar with props absolute', () => {
    render(<Toolbar absolute />);
  });

  test('render Toolbar with props bottom', () => {
    render(<Toolbar bottom />);
  });

  test('render Toolbar with props dense', () => {
    render(<Toolbar dense />);
  });

  test('render Toolbar with props flat', () => {
    render(<Toolbar flat />);
  });

  test('render Toolbar with props floating', () => {
    render(<Toolbar floating />);
  });
  test('render Toolbar with props children', () => {
    render(
      <Toolbar>
        <p>Hello World</p>
      </Toolbar>,
    );
  });

  //Render full
  test('render Toolbar with all props', () => {
    render(
      <Toolbar
        id={'testId'}
        className={'test-class-name'}
        contentClass={'test-class-content-name'}
        style={{ background: 'red' }}
        elevation={'8'}
        outlined
        rounded
        width={'300px'}
        height={'300px'}
        minWidth={'200px'}
        maxWidth={'400px'}
        minHeight={'300px'}
        maxHeight={'400px'}
        absolute
      >
        <p>Hello World</p>
      </Toolbar>,
    );
  });

  test('render Toolbar with all props', () => {
    render(
      <Toolbar
        id={'testId'}
        className={'test-class-name'}
        contentClass={'test-class-content-name'}
        style={{ background: 'red' }}
        flat
        outlined
        shaped
        width={'300px'}
        floating
      >
        <p>Hello World</p>
      </Toolbar>,
    );
  });
});
