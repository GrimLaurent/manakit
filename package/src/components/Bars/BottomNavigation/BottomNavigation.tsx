/**
 * BottomNavigation
 * @type Structural
 * @module BottomNavigation
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  ElevationClass,
  RoundedClass,
  SizeHTML,
} from '../../../types';

// styles
import './BottomNavigation.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { getClassNameColorScheme } from '../../../services/colorScheme';
import { bottomNavigationHeight } from '../../../assets/constant';
import { getClassNameElevation, getClassNameRounded } from '../../../services/application';

const BottomNavigation: FunctionComponent<BottomNavigationClassType> = ({
  id,
  className,
  style,
  children,
  app,
  fixed,
  absolute,
  dark,
  light,
  color,
  width,
  height,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  elevation = 4,
  grow,
  shift,
  flat,
  rounded,
}) => {
  const classList = [
    { el: 'is--app', val: app },
    { el: 'mkt-bottom-navigation--fixed', val: fixed || app },
    { el: 'mkt-bottom-navigation--absolute', val: absolute },
    { el: 'mkt-bottom-navigation--grow', val: grow },
    { el: 'mkt-bottom-navigation--shift', val: shift },
    { el: 'mkt-bottom-navigation--flat', val: flat },
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    { el: getClassNameElevation(4, elevation), val: flat ? false : elevation ? true : false },
    {
      el: getClassNameColorScheme(color, dark, light),
      val: color !== undefined,
    },
    { el: getClassNameRounded(true, rounded), val: rounded !== undefined },
  ];

  const styleList = {
    width: useSize(width),
    height: height ? useSize(height) : useSize(bottomNavigationHeight),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
  };

  return (
    <Fragment>
      <header
        id={id}
        className={useClassName('mkt-bottom-navigation', className, classList)}
        style={useStyle(styleList, style)}
      >
        <div className="mkt-bottom-navigation--wrap">
          <Fragment>{children}</Fragment>
        </div>
      </header>
    </Fragment>
  );
};

class BottomNavigationClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  app?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  dark?: boolean;
  light?: boolean;
  shift?: boolean;
  grow?: boolean;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
  color?: string;
  elevation?: ElevationClass;
  flat?: boolean;
  rounded?: RoundedClass;
}

export default BottomNavigation;
