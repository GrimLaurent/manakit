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
import { ResponsiveClassType } from './Responsive.type';

// styles
import './Responsive.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { useRatio } from '../../utils/ratio';

const Responsive: FunctionComponent<ResponsiveClassType> = ({
  id,
  className,
  style,
  children,
  contentClass,
  aspectRatio,
  frame,
  content,
  fillHeight,
}) => {
  const classList = [{ el: 'fill-height', val: fillHeight }];

  const styleList = {
    width: useSize(frame?.width),
    height: useSize(frame?.height),
    minWidth: useSize(frame?.minWidth),
    maxWidth: useSize(frame?.maxWidth),
    minHeight: useSize(frame?.minHeight),
    maxHeight: useSize(frame?.maxHeight),
  };

  const styleContentList = {
    width: useSize(content?.width),
  };

  return (
    <Fragment>
      <div id={id} className={useClassName('k-responsive', className, classList)} style={useStyle(styleList, style)}>
        <div className="k-responsive--sizer" style={{ paddingBottom: useRatio(aspectRatio) }}></div>
        <Fragment>{content?.body}</Fragment>
        <div className={useClassName('k-responsive--content', contentClass)} style={useStyle(styleContentList)}>
          <Fragment>{children}</Fragment>
        </div>
      </div>
    </Fragment>
  );
};

export default Responsive;
