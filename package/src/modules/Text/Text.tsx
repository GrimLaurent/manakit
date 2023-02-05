/**
 * Text
 * @type Structural
 * @module Text
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { TextClassType } from './Text.type';

// styles
import './Text.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';

const Text: FunctionComponent<TextClassType> = ({
  id,
  className,
  style,
  children,
  font,
  italic,
  primary,
  secondary,
  disabled,
  alt,
  frame,
  alignement,
}) => {
  const classList = [
    { el: 'text-' + font?.default, val: font?.default ? true : false },
    { el: 'text-xs-' + font?.xs, val: font?.xs ? true : false },
    { el: 'text-sm-' + font?.sm, val: font?.sm ? true : false },
    { el: 'text-md-' + font?.md, val: font?.md ? true : false },
    { el: 'text-lg-' + font?.lg, val: font?.lg ? true : false },
    { el: 'text-xl-' + font?.xl, val: font?.xl ? true : false },
    { el: 'text-' + alignement?.default, val: alignement?.default ? true : false },
    { el: 'text-xs-' + alignement?.xs, val: alignement?.xs ? true : false },
    { el: 'text-sm-' + alignement?.sm, val: alignement?.sm ? true : false },
    { el: 'text-md-' + alignement?.md, val: alignement?.md ? true : false },
    { el: 'text-lg-' + alignement?.lg, val: alignement?.lg ? true : false },
    { el: 'text-xl-' + alignement?.xl, val: alignement?.xl ? true : false },
    { el: 'font-weight-' + font?.weight, val: font?.weight ? true : false },
    { el: 'text-decoration-' + font?.decoration, val: font?.decoration ? true : false },
    { el: 'text-' + font?.transform, val: font?.transform ? true : false },
    { el: 'font-italic', val: italic },
    { el: 'text--primary', val: primary },
    { el: 'text--secondary', val: secondary },
    { el: 'text--disabled', val: disabled },
  ];

  const styleList = {
    width: useSize(frame?.width),
    height: useSize(frame?.height),
    minWidth: useSize(frame?.minWidth),
    maxWidth: useSize(frame?.maxWidth),
    minHeight: useSize(frame?.minHeight),
    maxHeight: useSize(frame?.maxHeight),
    fontSize: useSize(font?.size),
  };

  return (
    <Fragment>
      {alt === 'h1' ? (
        <h1 id={id} className={useClassName(`k-text`, className, classList)} style={useStyle(styleList, style)}>
          {children}
        </h1>
      ) : alt === 'h2' ? (
        <h2 id={id} className={useClassName(`k-text`, className, classList)} style={useStyle(styleList, style)}>
          {children}
        </h2>
      ) : alt === 'h3' ? (
        <h3 id={id} className={useClassName(`k-text`, className, classList)} style={useStyle(styleList, style)}>
          {children}
        </h3>
      ) : alt === 'h4' ? (
        <h4 id={id} className={useClassName(`k-text`, className, classList)} style={useStyle(styleList, style)}>
          {children}
        </h4>
      ) : alt === 'h5' ? (
        <h5 id={id} className={useClassName(`k-text`, className, classList)} style={useStyle(styleList, style)}>
          {children}
        </h5>
      ) : alt === 'h6' ? (
        <h6 id={id} className={useClassName(`k-text`, className, classList)} style={useStyle(styleList, style)}>
          {children}
        </h6>
      ) : alt === 'span' ? (
        <span id={id} className={useClassName(`k-text`, className, classList)} style={useStyle(styleList, style)}>
          {children}
        </span>
      ) : (
        <p id={id} className={useClassName(`k-text`, className, classList)} style={useStyle(styleList, style)}>
          {children}
        </p>
      )}
    </Fragment>
  );
};

export default Text;
