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
  elevation,
  dense,
}) => {
  const classList = [
    { el: 'k-toolbar--dense', val: dense },
    { el: 'k-toolbar--absolute', val: absolute },
    { el: 'k-toolbar--fixed', val: fixed },
    { el: 'k-toolbar--top', val: placement?.position === 'topBar' },
    { el: 'k-toolbar--bottom', val: placement?.position === 'bottomBar' },
    { el: 'rounded-xs', val: rounded === 'xs' },
    { el: 'rounded-sm', val: rounded === 'sm' },
    { el: 'rounded', val: typeof rounded === 'boolean' && rounded === true }, //default
    { el: 'rounded-lg', val: rounded === 'lg' },
    { el: 'rounded-xl', val: rounded === 'xl' },
    { el: 'rounded-0', val: rounded === 'none' },
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation === true },
    { el: 'elevation', val: typeof elevation === 'string' || typeof elevation === 'number' ? elevation : false },
  ];

  const styleList = {
    width: useSize(frame?.width),
    height: useSize(frame?.height),
    minWidth: useSize(frame?.minWidth),
    maxWidth: useSize(frame?.maxWidth),
    minHeight: useSize(frame?.minHeight),
    maxHeight: useSize(frame?.maxHeight),
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
      <header
        id={id}
        className={useClassName(`k-toolbar`, className, classList, {
          color: foregroundColor,
          background: backgroundColor,
        })}
        style={useStyle(styleList, style)}
      >
        <div className="k-toolbar--wrap">
          <Fragment>{children}</Fragment>
        </div>
      </header>
    </Fragment>
  );
};

export default Toolbar;
