/**
 * KResponsive
 * @type Structural
 * @module KResponsive
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ResponsiveClassType } from './KResponsive.type';

// styles
import './Responsive.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { useRatio } from '../../utils/ratio';

const KResponsive: FunctionComponent<ResponsiveClassType> = ({
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
    width: useSize(width),
    height: useSize(height),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
  };

  return (
    <Fragment>
      <div id={id} className={useClassName('k-responsive', className, classList)} style={useStyle(styleList, style)}>
        <div className="k-responsive--sizer" style={{ paddingBottom: useRatio(aspectRatio) }}></div>
        <div className={useClassName('k-responsive--content', contentClass)}>{children}</div>
      </div>
    </Fragment>
  );
};

export default KResponsive;
