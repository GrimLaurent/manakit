/**
 * Toolbar
 * @type Structural
 * @module Toolbar
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ToolbarClassType } from './Toolbar.type';

// styles
import './Toolbar.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';

// dependencies
import RoundedRectangle from '../../shapes/RoundedRectangle';

const Toolbar: FunctionComponent<ToolbarClassType> = ({
  id,
  className,
  style,
  children,
  frame,
  foregroundColor,
  backgroundColor,
  fixed,
  absolute,
  placement,
  rounded,
}) => {
  const classList = [
    { el: 'k-toolbar--absolute', val: absolute },
    { el: 'k-toolbar--fixed', val: fixed },
    { el: 'k-toolbar--top', val: placement?.position === 'topBar' },
    { el: 'k-toolbar--bottom', val: placement?.position === 'bottomBar' },
  ];

  const styleList = {
    width: useSize(frame?.width),
    height: useSize(frame?.height ? frame?.height : '64px'),
    minWidth: useSize(frame?.minWidth),
    maxWidth: useSize(frame?.maxWidth),
    minHeight: useSize(frame?.minHeight),
    maxHeight: useSize(frame?.maxHeight),
  };

  return (
    <Fragment>
      <RoundedRectangle
        id={id}
        className={useClassName(`k-toolbar`, className, classList, {
          color: foregroundColor,
          background: backgroundColor,
        })}
        style={useStyle(styleList, style)}
        rounded={rounded ? rounded : 'none'}
      >
        <Fragment>{children}</Fragment>
      </RoundedRectangle>
    </Fragment>
  );
};

export default Toolbar;
