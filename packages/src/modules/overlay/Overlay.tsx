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
import { OverlayType } from './types/Overlay';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const Overlay: FunctionComponent<OverlayType> = ({
  id,
  className,
  style,
  children,
  absolute,
  opacity,
  zIndex,
  value,
  isClose,
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
        id={useIdHtml(id)}
        className={useClassHtml('mk-overlay', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        <div className="mk-overlay--screen" style={useStyleHtml(styleScreenList)} onClick={isClose}></div>
        <div className="mk-overlay--wrap">{children}</div>
      </div>
    </Fragment>
  );
};

export default Overlay;
