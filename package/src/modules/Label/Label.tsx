/**
 * Label
 * @type Structural
 * @module Label
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { LabelClassType } from './Label.type';

// styles
import './Label.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';

const Label: FunctionComponent<LabelClassType> = ({
  id,
  className,
  style,
  children,
  icon,
  iconOnly,
  titleOnly,
  primary,
  secondary,
  disabled,
  frame,
  foregroundColor,
  backgroundColor,
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
      <div
        id={id}
        className={useClassName(`k-label`, className, classList, {
          color: foregroundColor,
          background: backgroundColor,
        })}
        style={useStyle(styleList, style)}
      >
        <div className="k-label--wrap">
          {!titleOnly && (icon?.position === 'left' || icon?.position === 'top' || icon?.position === undefined) ? (
            <Fragment>{icon?.slot}</Fragment>
          ) : (
            ''
          )}
          {!iconOnly ? children : ''}
          {!titleOnly && (icon?.position === 'right' || icon?.position === 'bottom') ? (
            <Fragment>{icon?.slot}</Fragment>
          ) : (
            ''
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Label;
