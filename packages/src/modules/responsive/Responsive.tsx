/**
 * Responsive
 *
 * @type Structural
 * @module Responsive
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Responsive.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ResponsiveType } from './types/Responsive';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml, useRatio } from '../../utils';

const Responsive: FunctionComponent<ResponsiveType> = ({
  id,
  className,
  style,
  children,
  contentClass,
  aspectRatio,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  fillHeight,
}) => {
  const classList = [{ el: 'fill-height', val: fillHeight }];

  const styleList = {
    width: useSizeHtml(width),
    height: useSizeHtml(height),
    minWidth: useSizeHtml(minWidth),
    maxWidth: useSizeHtml(maxWidth),
    minHeight: useSizeHtml(minHeight),
    maxHeight: useSizeHtml(maxHeight),
  };

  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-responsive', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        <div className="mk-responsive--sizer" style={{ paddingBottom: useRatio(aspectRatio) }}></div>
        <div className={useClassHtml('mk-responsive--content', contentClass)}>{children}</div>
      </div>
    </Fragment>
  );
};

export default Responsive;
