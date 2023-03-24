/**
 * List
 * @type Structural
 * @module List
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  ElevationClass,
  RoundedClass,
  SizeHTML,
} from '../../types';

// styles
import './List.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';
import Sheet from '../Sheet';

const List: FunctionComponent<ListClassType> = ({
  id,
  className,
  style,
  children,
  dark,
  light,
  color,
  width,
  height,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  elevation,
  outlined,
  rounded,
  dense,
  disabled,
  subheader,
  tile,
  twoLine,
  threeLine,
}) => {
  const classList = [
    { el: 'mkt-list--dense', val: dense },
    { el: 'mkt-list--disabled', val: disabled },
    { el: 'mkt-list--subheader', val: subheader },
    { el: 'mkt-list--tile', val: tile },
    { el: 'mkt-list--two-line', val: twoLine },
    { el: 'mkt-list--three-line', val: threeLine },
  ];

  return (
    <Fragment>
      <Sheet
        id={id}
        className={useClassName('mkt-list', className, classList)}
        style={useStyle({}, style)}
        color={color}
        outlined={outlined}
        rounded={rounded}
        elevation={elevation}
        width={width}
        height={height}
        minHeight={minHeight}
        minWidth={minWidth}
        maxHeight={maxHeight}
        maxWidth={maxWidth}
        dark={dark}
        light={light}
        role="list"
      >
        <Fragment>{children}</Fragment>
      </Sheet>
    </Fragment>
  );
};

class ListClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  color?: string;
  dark?: boolean;
  light?: boolean;
  dense?: boolean;
  disabled?: boolean;
  rounded?: RoundedClass;
  elevation?: ElevationClass;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
  outlined?: boolean;
  subheader?: boolean;
  tile?: boolean;
  twoLine?: boolean;
  threeLine?: boolean;
}

export default List;
