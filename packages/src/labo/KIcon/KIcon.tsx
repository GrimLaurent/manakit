/**
 * KIcon
 * @type Structural
 * @module KIcon
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */

import React, { Fragment, FunctionComponent } from 'react';
import { IconClassType } from './KIcon.type';

// styles
import './KIcon.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import getSizeSVG from './KIcon.helpers';

//components
import MDI from './components/MDI';
import { useColor } from '../../utils/color';

const KIcon: FunctionComponent<IconClassType> = ({
  title,
  id,
  className,
  style,
  children,
  xSmall,
  small,
  large,
  xLarge,
  dense,
  disabled,
  size,
  color,
  dark,
  light,
}) => {
  const classList = [
    { el: 'k-icon--x-small', val: xSmall },
    { el: 'k-icon--small', val: small },
    { el: 'k-icon--large', val: large },
    { el: 'k-icon--x-large', val: xLarge },
    { el: 'k-icon--dense', val: dense },
    { el: 'k-icon--disabled', val: disabled },
    { el: useColor('on-surface--text', color ? color + '--text' : undefined, dark, light), val: true },
  ];

  const styleList = {
    width: useSize(size ? useSize(size) : getSizeSVG(xSmall, small, large, xLarge, dense)),
    height: useSize(size ? useSize(size) : getSizeSVG(xSmall, small, large, xLarge, dense)),
  };

  return (
    <Fragment>
      <span id={id} className={useClassName('k-icon', className, classList)} style={useStyle({}, style)} title={title}>
        <MDI styleList={styleList} dense={dense} disabled={disabled} color={color}>
          {children}
        </MDI>
      </span>
    </Fragment>
  );
};

export default KIcon;
