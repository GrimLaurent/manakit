/**
 * Toolbar
 * @type Structural
 * @module Toolbar
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useState, useEffect } from 'react';
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
import './Toolbar.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { getClassNameColorScheme } from '../../../services/colorScheme';
import { getClassNameElevation, getClassNameRounded } from '../../../services/application';
import { md, toolbarHeight, toolbarHeightDense, toolbarHeightMin } from '../../../assets/constant';

const Toolbar: FunctionComponent<ToolbarClassType> = ({
  tag = 'header',
  id,
  className,
  style,
  children,
  absolute,
  dark,
  light,
  color,
  rounded,
  elevation,
  outlined,
  width,
  height,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  shaped,
  floating,
  bottom,
  dense,
  flat,
}) => {
  const [componentHeight, setComponentHeight] = useState(0);
  const classList = [
    { el: 'mkt-toolbar--absolute', val: absolute },
    { el: 'mkt-toolbar--flat', val: flat },
    { el: 'mkt-toolbar--dense', val: dense },
    { el: 'mkt-toolbar--bottom', val: bottom },
    { el: 'mkt-toolbar--floating', val: floating },
    { el: 'mkt-toolbar--shaped', val: shaped },
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    { el: getClassNameElevation(2, elevation), val: flat ? false : true },
    { el: getClassNameRounded(true, rounded), val: rounded !== undefined },
    {
      el: getClassNameColorScheme(color, dark, light, undefined, outlined),
      val: color !== undefined,
    },
  ];

  const styleList = {
    width: useSize(width),
    height: height ? useSize(height) : useSize(componentHeight),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
  };

  useEffect(() => {
    componentSize();
    window.addEventListener('resize', () => {
      componentSize();
    });
  }, []);

  const componentSize = () => {
    const width = window.innerWidth;
    console.log('size', width);
    if (width > md) {
      if (dense) {
        setComponentHeight(toolbarHeightDense);
      } else {
        setComponentHeight(toolbarHeight);
      }
    } else {
      setComponentHeight(toolbarHeightMin);
    }
  };

  return (
    <Fragment>
      {tag === 'header' ? (
        <header
          id={id}
          className={useClassName('mkt-toolbar', className, classList)}
          style={useStyle(styleList, style)}
        >
          <Fragment>{children}</Fragment>
        </header>
      ) : (
        <div id={id} className={useClassName('mkt-toolbar', className, classList)} style={useStyle(styleList, style)}>
          <Fragment>{children}</Fragment>
        </div>
      )}
    </Fragment>
  );
};

class ToolbarClassType {
  id?: ElementIdHTMLType;
  tag?: 'header' | 'div';
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  absolute?: boolean;
  dark?: boolean;
  light?: boolean;
  color?: string;
  rounded?: RoundedClass;
  outlined?: boolean;
  elevation?: ElevationClass;
  dense?: boolean;
  bottom?: boolean;
  flat?: boolean;
  floating?: boolean;
  shaped?: boolean;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
}

export default Toolbar;
