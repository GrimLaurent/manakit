/**
 * Overlay
 *
 * @type Structural
 * @module Overlay
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Overlay.scss';
import React, { Fragment, FunctionComponent, useEffect } from 'react';
import { OverlayType } from './Overlay.type';
import { useId, useClassName, useSize, useStyle } from '../../utils/dom';

const Overlay: FunctionComponent<OverlayType> = ({
  id,
  className,
  style,
  children,
  absolute,
  opacity,
  zIndex,
  value,
  handleClose,
}) => {
  const classList = [
    { el: 'opacity--absolute', val: absolute },
    { el: 'is--open', val: value },
  ];

  const styleList = {
    zIndex: zIndex,
  };

  const styleScreenList = {
    opacity: opacity,
  };

  return (
    <Fragment>
      <div
        id={useId(id)}
        className={useClassName('mk-overlay', className, classList)}
        style={useStyle(styleList, style)}
      >
        <div className="mk-overlay--screen" style={useStyle(styleScreenList)} onClick={handleClose}></div>
        <div className="mk-overlay--wrap">{children}</div>
      </div>
    </Fragment>
  );
};

export default Overlay;
