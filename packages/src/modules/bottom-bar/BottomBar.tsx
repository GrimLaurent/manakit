/**
 * BottomBar
 *
 * @type Structural
 * @module BottomBar
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './BottomBar.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { BottomBarType } from './types/BottomBar';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const BottomBar: FunctionComponent<BottomBarType> = ({
  id,
  className,
  style,
  children,
  absolute,
  fixed,
  grow,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
}) => {
  const classList = [
    { el: 'elevation-2', val: true },
    { el: 'bottom-bar--absolute', val: absolute },
    { el: 'bottom-bar--fixed', val: fixed },
    { el: 'is--grow', val: grow },
  ];

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
        className={useClassHtml('mk-bottom-bar', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default BottomBar;
