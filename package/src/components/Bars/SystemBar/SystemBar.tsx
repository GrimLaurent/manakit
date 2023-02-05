/**
 * SystemBar
 * @type Structural
 * @module SystemBar
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  SizeHTML,
} from '../../../types';

// styles
import './SystemBar.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { getClassNameColorScheme } from '../../../services/colorScheme';
import { systemBarHeight } from '../../../assets/constant';

const SystemBar: FunctionComponent<SystemBarClassType> = ({
  id,
  className,
  style,
  children,
  app,
  fixed,
  absolute,
  height,
  dark,
  light,
  color,
}) => {
  const classList = [
    { el: 'is--app', val: app },
    { el: 'mkt-system-bar--fixed', val: fixed || app },
    { el: 'mkt-system-bar--absolute', val: absolute },
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    {
      el: getClassNameColorScheme(color, dark, light),
      val: color !== undefined,
    },
  ];

  const styleList = {
    height: height ? useSize(height) : useSize(systemBarHeight),
  };

  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-system-bar', className, classList)} style={useStyle(styleList, style)}>
        <Fragment>{children}</Fragment>
      </div>
    </Fragment>
  );
};

class SystemBarClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  app?: boolean;
  fixed?: boolean;
  absolute?: boolean;
  dark?: boolean;
  light?: boolean;
  height?: SizeHTML;
  color?: string;
}

export default SystemBar;
