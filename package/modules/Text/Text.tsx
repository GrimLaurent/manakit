/**
 * Text
 * @type Structural
 * @module Text
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { TextClassType } from './Text.type';

// styles
import './Text.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';

const Text: FunctionComponent<TextClassType> = ({
  id,
  className,
  style,
  children,
  type,
  xs,
  sm,
  md,
  lg,
  xl,
  align,
  alignXs,
  alignSm,
  alignMd,
  alignLg,
  alignXl,
  weight,
  italic,
  decoration,
  transform,
  primary,
  secondary,
  disabled,
}) => {
  const classList = [
    { el: 'text-' + type, val: type ? true : false },
    { el: 'text-xs-' + xs, val: xs ? true : false },
    { el: 'text-sm-' + sm, val: sm ? true : false },
    { el: 'text-md-' + md, val: md ? true : false },
    { el: 'text-lg-' + lg, val: lg ? true : false },
    { el: 'text-xl-' + xl, val: xl ? true : false },
    { el: 'text-' + align, val: align ? true : false },
    { el: 'text-xs-' + alignXs, val: alignXs ? true : false },
    { el: 'text-sm-' + alignSm, val: alignSm ? true : false },
    { el: 'text-md-' + alignMd, val: alignMd ? true : false },
    { el: 'text-lg-' + alignLg, val: alignLg ? true : false },
    { el: 'text-xl-' + alignXl, val: alignXl ? true : false },
    { el: 'font-weight-' + weight, val: weight ? true : false },
    { el: 'font-italic', val: italic },
    { el: 'text-decoration-' + decoration, val: decoration ? true : false },
    { el: 'text-' + transform, val: transform ? true : false },
    { el: 'text--primary', val: primary },
    { el: 'text--secondary', val: secondary },
    { el: 'text--disabled', val: disabled },
  ];

  return (
    <Fragment>
      <span id={id} className={useClassName(`k-text`, className, classList)} style={useStyle({}, style)}>
        {children}
      </span>
    </Fragment>
  );
};

export default Text;
