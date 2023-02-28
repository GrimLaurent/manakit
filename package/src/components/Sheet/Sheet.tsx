/**
 * Sheet
 * @type Structural
 * @module Sheet
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
} from '../../types';

// styles
import './Sheet.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { getClassNameColorScheme } from '../../services/colorScheme';
import { getClassNameElevation, getClassNameRounded } from '../../services/application';

const Sheet: FunctionComponent<SheetClassType> = ({
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
  maxWidth,
  maxHeight,
  elevation,
  outlined,
  rounded,
  relative,
  absolute,
  statik,
  fixed,
  sticky,
}) => {
  const classList = [
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    { el: 'mkt-sheet--outlined', val: outlined },
    { el: 'mkt-sheet--relative', val: relative },
    { el: 'mkt-sheet--absolute', val: absolute },
    { el: 'mkt-sheet--statik', val: statik },
    { el: 'mkt-sheet--fixed', val: fixed },
    { el: 'mkt-sheet--sticky', val: sticky },
    { el: getClassNameElevation(2, elevation), val: elevation !== undefined && !outlined },
    { el: getClassNameRounded(true, rounded), val: rounded !== undefined },
    {
      el: getClassNameColorScheme(color, dark, light),
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
  };

  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-sheet', className, classList)} style={useStyle(styleList, style)}>
        <Fragment>{children}</Fragment>
      </div>
    </Fragment>
  );
};

class SheetClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  dark?: boolean;
  light?: boolean;
  color?: string;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
  outlined?: boolean;
  rounded?: RoundedClass;
  elevation?: ElevationClass;
  relative?: boolean;
  absolute?: boolean;
  statik?: boolean;
  fixed?: boolean;
  sticky?: boolean;
}

export default Sheet;
