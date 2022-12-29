/**
 * Circle
 * @type Structural
 * @module Circle
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { CircleClassType } from './Circle.type';

// styles
import './Circle.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { useColor } from '../../../utils/color';

const Circle: FunctionComponent<CircleClassType> = (props) => {
  const { id, className, style, children, size, minSize, maxSize, elevation, color, dark, light } = props;

  const classList = [
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation === true },
    { el: 'elevation', val: typeof elevation === 'string' || typeof elevation === 'number' ? elevation : false },
    { el: useColor('surface', color, dark, light), val: true }, // background
    { el: useColor('on-surface--text', color ? 'on-' + color + '--text' : undefined, dark, light), val: true }, // text
  ];

  const styleList = {
    width: useSize(size),
    height: useSize(size),
    minWidth: useSize(minSize),
    maxWidth: useSize(maxSize),
    minHeight: useSize(minSize),
    maxHeight: useSize(maxSize),
  };

  return (
    <Fragment>
      <div
        id={id}
        className={useClassName('k-circle rounded-circle', className, classList)}
        style={useStyle(styleList, style)}
      >
        <div className={'k-circle--wrap'}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Circle;
