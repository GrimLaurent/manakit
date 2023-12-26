/**
 * Footer
 * @type Structural
 * @module Footer
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
  SizeHTML,
  RoundedClass,
} from '../../../types';

// styles
import './Footer.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { getClassNameElevation, getClassNameRounded } from '../../../services/application';
import { getClassNameColorScheme } from '../../../services/colorScheme';
import { getSizeNavigation } from '../../../services/main';

const Footer: FunctionComponent<FooterClassType> = ({
  tag = 'footer',
  id,
  className,
  style,
  children,
  app,
  outlined,
  fixed,
  absolute,
  elevation,
  width,
  height,
  minHeight,
  minWidth,
  maxWidth,
  maxHeight,
  rounded,
  dark,
  light,
  color,
}) => {
  const [marginLeft, setMarginLeft] = useState(0);
  const [marginRight, setMarginRight] = useState(0);

  const classList = [
    { el: 'is--app', val: app },
    { el: 'mkt-footer--fixed', val: fixed || app },
    { el: 'mkt-footer--absolute', val: absolute },
    { el: 'mkt-footer--outlined', val: outlined },
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    { el: getClassNameElevation(2, elevation), val: elevation !== undefined },
    { el: getClassNameRounded(true, rounded), val: rounded !== undefined },
    {
      el: getClassNameColorScheme(color, dark, light, undefined, outlined),
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
    margin: `0 ${useSize(marginRight)} 0 ${useSize(marginLeft)}`,
  };

  useEffect(() => {
    let right = 0;
    let left = 0;
    const navigation = getSizeNavigation();

    if (navigation) {
      navigation.map((el) => {
        if (el.position === 'left') {
          left = left + el.size;
        } else if (el.position === 'right') {
          right = right + el.size;
        }
      });
    }
    setMarginLeft(left);
    setMarginRight(right);
  });

  return (
    <Fragment>
      {tag === 'footer' ? (
        <footer id={id} className={useClassName('mkt-footer', className, classList)} style={useStyle(styleList, style)}>
          <Fragment>{children}</Fragment>
        </footer>
      ) : (
        <div id={id} className={useClassName('mkt-footer', className, classList)} style={useStyle(styleList, style)}>
          <Fragment>{children}</Fragment>
        </div>
      )}
    </Fragment>
  );
};

class FooterClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  tag?: 'footer' | 'div';
  app?: boolean;
  outlined?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  elevation?: ElevationClass;
  rounded?: RoundedClass;
  dark?: boolean;
  light?: boolean;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
  color?: string;
  constructor() {
    this.tag = 'footer';
  }
}

export default Footer;
