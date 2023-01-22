/**
 * Navigation
 * @type Structural
 * @module Navigation
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
// import { LabelClassType } from './Label.type';

// styles
import './Navigation.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import Overlay from '../overlay';

const Navigation: FunctionComponent<any> = ({
  id,
  className,
  style,
  children,
  frame,
  foregroundColor,
  backgroundColor,
  fixed,
  absolute,
  forceOpenMd,
  open,
  handleOpen,
  temporary,
  bottomNav,
}) => {
  const classList = [
    { el: 'k-navigation--fixed', val: fixed },
    { el: 'k-navigation--absolute', val: absolute },
    { el: 'is-open', val: open },
    { el: 'navigation-drawer--temporary', val: temporary },
    { el: 'navigation--is-bottom', val: bottomNav },
  ];

  const styleList = {
    width: useSize(frame?.width),
    height: useSize(frame?.height),
    minWidth: useSize(frame?.minWidth),
    maxWidth: useSize(frame?.maxWidth),
    minHeight: useSize(frame?.minHeight),
    maxHeight: useSize(frame?.maxHeight),
    transform: bottomNav
      ? open
        ? 'translateY(0%)'
        : 'translateY(100%)'
      : open
      ? 'translateX(0%)'
      : 'translateX(-100%)',
  };

  useEffect(() => {
    // control size appbar for generate spacing
    if (forceOpenMd) {
      if (window.innerWidth >= 1100 && forceOpenMd) {
        handleOpen(true);
      } else {
        handleOpen(false);
      }
    }

    window.addEventListener('resize', () => {
      if (forceOpenMd) {
        if (window.innerWidth >= 1100 && forceOpenMd) {
          handleOpen(true);
        } else {
          handleOpen(false);
        }
      }
    });
  }, []);

  return (
    <Fragment>
      {temporary ? <Overlay value={open} absolute={absolute || fixed} handleClose={() => handleOpen(false)} /> : ''}
      <div
        id={id}
        className={useClassName(`k-navigation`, className, classList, {
          color: foregroundColor,
          background: backgroundColor,
        })}
        style={useStyle(styleList, style)}
      >
        <div className="k-navigation--wrap">{children}</div>
        <div className="k-navigation--border"></div>
      </div>
    </Fragment>
  );
};

export default Navigation;
