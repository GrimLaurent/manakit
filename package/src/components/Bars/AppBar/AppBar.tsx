/**
 * AppBar
 * @type Structural
 * @module AppBar
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  ElevationClass,
  RoundedClass,
  SizeHTML,
} from '../../../types';

// dependencies
import Toolbar from '../Toolbar';

// styles
import './AppBar.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { getSizeSystemBar } from '../../../services/main';

const AppBar: FunctionComponent<AppBarClassType> = ({
  id,
  className,
  style,
  children,
  app,
  absolute,
  fixed,
  dark,
  light,
  color,
  rounded,
  elevation = 2,
  outlined,
  width,
  height,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  floating,
  dense,
  flat,
}) => {
  const [marginTop, setMarginTop] = useState(0);
  const classList = [
    { el: 'is--app', val: app },
    { el: 'mkt-app-bar--fixed', val: fixed || app },
  ];
  const styleList = {
    top: useSize(marginTop),
  };

  useEffect(() => {
    let top = 0;
    const systemBar = getSizeSystemBar();

    if (systemBar) {
      top = top + systemBar;
    }

    setMarginTop(top);
  });

  return (
    <Fragment>
      <Toolbar
        id={id}
        className={useClassName('mkt-app-bar', className, classList)}
        style={useStyle(styleList, style)}
        absolute={absolute}
        dark={dark}
        light={light}
        color={color}
        rounded={rounded}
        outlined={outlined}
        elevation={elevation}
        dense={dense}
        flat={flat}
        floating={floating}
        width={width}
        height={height}
        minWidth={minWidth}
        minHeight={minHeight}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
      >
        <Fragment>{children}</Fragment>
      </Toolbar>
    </Fragment>
  );
};

class AppBarClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  app?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  dark?: boolean;
  light?: boolean;
  color?: string;
  rounded?: RoundedClass;
  outlined?: boolean;
  elevation?: ElevationClass;
  dense?: boolean;
  flat?: boolean;
  floating?: boolean;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
}

export default AppBar;
