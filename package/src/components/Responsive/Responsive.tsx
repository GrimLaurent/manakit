/**
 * Responsive
 * @type Structural
 * @module Responsive
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';

// styles
import './Responsive.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { useRatio } from '../../utils/ratio';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  SizeType,
} from '../../types';

const Responsive: FunctionComponent<ResponsiveClassType> = ({
  id,
  className,
  style,
  children,
  aspectRatio,
  contentClass,
  fillHeight,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  contentWidth,
  content,
}) => {
  const classList = [{ el: 'fill-height', val: fillHeight }];

  const styleList = {
    width: useSize(width),
    height: useSize(height),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
  };

  const styleContentList = {
    width: useSize(contentWidth),
  };

  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-responsive', className, classList)} style={useStyle(styleList, style)}>
        <div className="mkt-responsive--sizer" style={{ paddingBottom: useRatio(aspectRatio) }}></div>
        <Fragment>{content}</Fragment>
        <div className={useClassName('mkt-responsive--content', contentClass)} style={useStyle(styleContentList)}>
          <Fragment>{children}</Fragment>
        </div>
      </div>
    </Fragment>
  );
};

class ResponsiveClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  aspectRatio?: string | number;
  contentClass?: string;
  fillHeight?: boolean;
  width?: SizeType;
  height?: SizeType;
  minWidth?: SizeType;
  minHeight?: SizeType;
  maxWidth?: SizeType;
  maxHeight?: SizeType;
  contentWidth?: SizeType;
  content?: ElementChildrenType;
}

export default Responsive;
