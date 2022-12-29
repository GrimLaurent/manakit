/**
 * KCapsule
 * @type Structural
 * @module KCapsule
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { CapsuleClassType } from './KCapsule.type';

// styles
import './KCapsule.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { useColor } from '../../../utils/color';

const KCapsule: FunctionComponent<CapsuleClassType> = (props) => {
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
    { el: useColor('surface', color, dark, light), val: true }, // background
    { el: useColor('on-surface--text', color ? 'on-' + color + '--text' : undefined, dark, light), val: true }, // text
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
      <div
        id={id}
        className={useClassName('k-capsule rounded-pill', className, classList)}
        style={useStyle(styleList, style)}
      >
        <div className={'k-capsule--wrap'}>{children}</div>
      </div>
    </Fragment>
  );
};

export default KCapsule;
