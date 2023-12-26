/**
 * NavigationDrawer
 * @type Structural
 * @module NavigationDrawer
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  SizeHTML,
} from '../../types';

// styles
import './NavigationDrawer.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { getClassNameColorScheme } from '../../services/colorScheme';
import Overlay from '../Overlay';

const NavigationDrawer: FunctionComponent<NavigationDrawerClassType> = ({
  id,
  className,
  style,
  children,
  dark,
  light,
  color,
  width,
  height,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  temporary,
  bottomNav,
  open,
  forceOpenMd,
  handleOpen,
  absolute,
  fixed,
}) => {
  const [marginTop, setMarginTop] = useState(0);
  const [marginBottom, setMarginBottom] = useState(0);

  const classList = [
    { el: 'is-open', val: open },
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    { el: 'mkt-navigation-drawer--fixed', val: fixed },
    { el: 'mkt-navigation-drawer--absolute', val: absolute },
    {
      el: getClassNameColorScheme(color, dark, light, true),
      val: color !== undefined,
    },
  ];

  const styleList = {
    width: useSize(width),
    height: useSize(height),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
    marginTop: useSize(marginTop),
    marginBottom: useSize(marginBottom),
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
        className={useClassName('mkt-navigation-drawer', className, classList)}
        style={useStyle(styleList, style)}
      >
        <div className="mkt-navigation-drawer--wrap">
          <Fragment>{children}</Fragment>
        </div>
        <div className="mkt-navigation-drawer--border" />
      </div>
    </Fragment>
  );
};

class NavigationDrawerClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  color?: string;
  temporary?: boolean;
  open?: boolean;
  absolute?: boolean;
  fixed?: boolean;
  dark?: boolean;
  light?: boolean;
  bottomNav?: boolean;
  forceOpenSm?: boolean;
  forceOpenMd?: boolean;
  forceOpenLg?: boolean;
  forceOpenXl?: boolean;
  handleOpen?: any;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
}

export default NavigationDrawer;
