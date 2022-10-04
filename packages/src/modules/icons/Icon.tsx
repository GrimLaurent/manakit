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
import React, { Fragment, FunctionComponent, useEffect } from 'react';
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

  useEffect(() => {
    console.log('ICON => children', children);
  }, [children]);

  return (
    <Fragment>
      <span
        id={useIdHtml(id)}
        className={useClassHtml('mk-icon', className, classList)}
        style={useStyleHtml({}, style)}
      >
        {/* {children} */}
        <MDIIcon>{children}</MDIIcon>
      </span>
    </Fragment>
  );
};

export default Icon;

const MDIIcon: FunctionComponent<IconType> = ({ children }) => {
  return (
    <Fragment>
      <span>
        <svg
          viewBox="0 0 24 24"
          style={{ width: '1.5rem', height: '1.5rem', transformOrigin: 'center' }}
          aria-labelledby="icon_labelledby_4"
        >
          <g style={{ transformOrigin: 'center' }}>
            <path d={children as any}></path>
          </g>
        </svg>
      </span>
    </Fragment>
  );
};
