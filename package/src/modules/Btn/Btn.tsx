/**
 * Btn
 * @type Structural
 * @module Btn
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { BtnClassType } from './Btn.type';

// styles
import './Btn.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';

const Btn: FunctionComponent<BtnClassType> = ({
  id,
  className,
  style,
  children,
  href,
  icon,
  iconOnly,
  titleOnly,
  primary,
  secondary,
  disabled,
  frame,
  foregroundColor,
  backgroundColor,
  xSmall,
  small,
  large,
  xLarge,
  onClick,
}) => {
  const classList = [
    { el: 'text--primary', val: primary },
    { el: 'text--secondary', val: secondary },
    { el: 'text--disabled', val: disabled },
    { el: 'k-label--title-only', val: titleOnly },
    { el: 'k-label--icon-only', val: iconOnly },
    { el: 'k-label--top', val: icon?.position === 'top' },
    { el: 'k-label--bottom', val: icon?.position === 'bottom' },
    { el: 'k-label--left', val: icon?.position === 'left' },
    { el: 'k-label--right', val: icon?.position === 'right' || icon?.position === undefined },
    { el: 'k-btn--x-small', val: xSmall },
    { el: 'k-btn--small', val: small },
    { el: 'k-btn--large', val: large },
    { el: 'k-btn--x-large', val: xLarge },
  ];

  const styleList = {
    width: useSize(frame?.width),
    height: useSize(frame?.height),
    minWidth: useSize(frame?.minWidth),
    maxWidth: useSize(frame?.maxWidth),
    minHeight: useSize(frame?.minHeight),
    maxHeight: useSize(frame?.maxHeight),
  };

  return (
    <Fragment>
      {href ? (
        <a
          href={href}
          id={id}
          className={useClassName(`k-btn`, className, classList, {
            color: foregroundColor,
            background: backgroundColor,
          })}
          style={useStyle(styleList, style)}
        >
          <span className="hover"></span>
          <div className="k-btn--content">
            <span>
              <Fragment>{children}</Fragment>
            </span>
          </div>
        </a>
      ) : (
        <button
          id={id}
          className={useClassName(`k-btn`, className, classList, {
            color: foregroundColor,
            background: backgroundColor,
          })}
          style={useStyle(styleList, style)}
          onClick={onClick}
        >
          <span className="hover"></span>
          <div className="k-btn--content">
            <span>
              <Fragment>{children}</Fragment>
            </span>
          </div>
        </button>
      )}
    </Fragment>
  );
};

export default Btn;
