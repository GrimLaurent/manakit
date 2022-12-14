/**
 * KRectangle
 * @type Structural
 * @module KRectangle
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { RectangleClassType } from './KRectangle.type';

// styles
import './KRectangle.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { useColor } from '../../../utils/color';

const KRectangle: FunctionComponent<RectangleClassType> = (props) => {
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
    color,
    dark,
    light,
  } = props;

  const classList = [
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation === true },
    { el: 'elevation', val: typeof elevation === 'string' || typeof elevation === 'number' ? elevation : false },
    { el: useColor('surface', color, dark, light), val: color ? true : false },
  ];

  const styleList = {
    width: useSize(width),
    height: useSize(height),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
  };

  return (
    <Fragment>
      <div id={id} className={useClassName('k-rectangle', className, classList)} style={useStyle(styleList, style)}>
        {children}
      </div>
    </Fragment>
  );
};

export default KRectangle;
