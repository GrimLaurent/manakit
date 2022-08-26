/**
 * Icon
 *
 * @type Structural
 * @module Icon
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Icon.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { IconType } from './types/Icon';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const Icon: FunctionComponent<IconType> = ({
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
}) => {
  const classList = [
    { el: 'mk-icon--x-small', val: xSmall },
    { el: 'mk-icon--small', val: small },
    { el: 'mk-icon--large', val: large },
    { el: 'mk-icon--x-large', val: xLarge },
    { el: 'mk-icon--dense', val: dense },
    { el: 'mk-icon--disabled', val: disabled },
  ];

  return (
    <Fragment>
      <span
        id={useIdHtml(id)}
        className={useClassHtml('mk-icon', className, classList)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </span>
    </Fragment>
  );
};

export default Icon;
