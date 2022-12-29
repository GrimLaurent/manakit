/**
 * RoundedRectangle
 * @type Structural
 * @module RoundedRectangle
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { RoundedRectangleClassType } from './RoundedRectangle.type';

// styles
import './RoundedRectangle.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { useColor } from '../../../utils/color';

const RoundedRectangle: FunctionComponent<RoundedRectangleClassType> = (props) => {
  const {
    id,
    className,
    style,
    children,
    width,
    height,
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    elevation,
    rounded,
    color,
    dark,
    light,
  } = props;

  const classList = [
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation === true },
    { el: 'elevation', val: typeof elevation === 'string' || typeof elevation === 'number' ? elevation : false },
    { el: useColor('surface', color, dark, light), val: true }, // background
    { el: useColor('on-surface--text', color ? 'on-' + color + '--text' : undefined, dark, light), val: true }, // text
    { el: 'rounded-xs', val: rounded === 'xs' },
    { el: 'rounded-sm', val: rounded === 'sm' },
    { el: 'rounded', val: rounded === undefined ? true : typeof rounded === 'boolean' && rounded === true }, //default
    { el: 'rounded-lg', val: rounded === 'lg' },
    { el: 'rounded-xl', val: rounded === 'xl' },
    { el: 'rounded-0', val: rounded === 'none' },
  ];

  const styleList = {
    width: useSize(width),
    height: useSize(height),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
    borderRadius:
      rounded !== 'none' &&
      rounded !== 'xs' &&
      rounded !== 'sm' &&
      rounded !== 'lg' &&
      rounded !== 'xl' &&
      typeof rounded !== 'boolean'
        ? useSize(rounded)
        : '',
  };

  return (
    <Fragment>
      <div
        id={id}
        className={useClassName('k-rounded-rectangle', className, classList)}
        style={useStyle(styleList, style)}
      >
        <div className={'k-rounded-rectangle--wrap'}>{children}</div>
      </div>
    </Fragment>
  );
};

export default RoundedRectangle;
