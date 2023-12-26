/**
 * Btn
 * @type Structural
 * @module Btn
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useState } from 'react';
import { getClassNameElevation, getClassNameRounded } from '../../services/application';
import { getClassNameColorScheme } from '../../services/colorScheme';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  SizeHTML,
  RoundedClass,
  ElevationClass,
} from '../../types';
import { useClassName, useSize, useStyle } from '../../utils/dom';

// modules
import Anchor from './modules/anchor';
import Button from './modules/button';

// styles
import './Btn.scss';

const Btn: FunctionComponent<BtnClassType> = ({
  id,
  className,
  style,
  children,
  outlined,
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
  stacked,
  prependIcon,
  appendIcon,
  size,
  text,
  block,
  value,
  onClick,
  position,
  flat,
  active,
  loading,
  disabled,
  icon,
  href,
  target,
}) => {
  const classList = [
    { el: 'mkt-btn--stacked', val: stacked },
    { el: 'mkt-btn--outlined', val: outlined },
    { el: 'mkt-btn--text', val: text },
    { el: 'mkt-btn--block', val: block },
    { el: 'mkt-btn--flat', val: flat },
    { el: 'mkt-btn--icon', val: icon },
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },

    { el: 'is--active', val: active },
    { el: 'is--loading', val: loading },
    { el: 'is--disabled', val: disabled },

    { el: getClassNameElevation(2, elevation), val: elevation !== undefined },
    { el: 'elevation-2', val: elevation === undefined && !flat && !text && !outlined },
    { el: getClassNameRounded(true, rounded), val: rounded !== undefined },
    {
      el: getClassNameColorScheme(color, dark, light, text, outlined),
      val: color !== undefined,
    },
    { el: 'mkt-btn--size-x-small', val: size === 'xs' },
    { el: 'mkt-btn--size-small', val: size === 'sm' },
    { el: 'mkt-btn--size-default', val: size === 'md' || size === undefined },
    { el: 'mkt-btn--size-large', val: size === 'lg' },
    { el: 'mkt-btn--size-x-large', val: size === 'xl' },

    { el: 'mkt-btn--is-static', val: position === 'static' },
    { el: 'mkt-btn--is-relative', val: position === 'relative' },
    { el: 'mkt-btn--is-fixed', val: position === 'fixed' },
    { el: 'mkt-btn--is-absolute', val: position === 'absolute' },
    { el: 'mkt-btn--is-sticky', val: position === 'sticky' },
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
      {href ? (
        <a
          href={href}
          target={target}
          id={id}
          className={useClassName('mkt-btn', className, classList)}
          style={useStyle(styleList, style)}
        >
          <Anchor loading={loading} prependIcon={prependIcon} appendIcon={appendIcon}>
            {children}
          </Anchor>
        </a>
      ) : (
        <button
          type="button"
          id={id}
          className={useClassName('mkt-btn', className, classList)}
          style={useStyle(styleList, style)}
          value={!disabled ? value : undefined}
          onClick={!disabled && !loading ? onClick : undefined}
          disabled={disabled}
        >
          <Button loading={loading} prependIcon={prependIcon} appendIcon={appendIcon}>
            {children}
          </Button>
        </button>
      )}
    </Fragment>
  );
};

export class BtnClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;

  dark?: boolean;
  light?: boolean;

  active?: boolean;
  block?: boolean;
  color?: string;
  elevation?: ElevationClass;
  flat?: boolean;
  onClick?: any;
  href?: any;
  target?: string;
  icon?: boolean;
  loading?: string | boolean;
  width?: SizeHTML;
  height?: SizeHTML;
  minWidth?: SizeHTML;
  minHeight?: SizeHTML;
  maxWidth?: SizeHTML;
  maxHeight?: SizeHTML;
  position?: 'static' | 'relative' | 'fixed' | 'absolute' | 'sticky';
  prependIcon?: ElementChildrenType;
  appendIcon?: ElementChildrenType;
  rounded?: RoundedClass;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  stacked?: boolean;
  value?: any;
  outlined?: boolean;
  text?: boolean;
  disabled?: boolean;
}

export default Btn;
