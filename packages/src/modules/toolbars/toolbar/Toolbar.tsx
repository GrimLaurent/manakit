/**
 * Toolbar
 *
 * @type Structural
 * @module Toolbar
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Toolbar.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ToolbarType } from './types/Toolbar';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../../utils';

const Toolbar: FunctionComponent<ToolbarType> = ({
  id,
  className,
  style,
  children,
  elevation,
  outlined,
  rounded,
  shaped,
  tile,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  absolute,
  bottom,
  dense,
  flat,
  floating,
  contentClass,
}) => {
  const classList = [
    { el: 'elevation', val: elevation },
    { el: 'rounded', val: rounded === true },
    { el: 'rounded', val: typeof rounded === 'string' ? rounded : false },
    { el: 'mk-toolbar--absolute', val: absolute },
    { el: 'mk-toolbar--bottom', val: bottom },
    { el: 'mk-toolbar--dense', val: dense },
    { el: 'mk-toolbar--flat', val: flat },
    { el: 'mk-toolbar--floating', val: floating },
    { el: 'mk-surface--outlined', val: outlined },
    { el: 'mk-surface--shaped', val: shaped },
    { el: 'rounded-0', val: tile },
  ];

  const styleList = {
    width: useSizeHtml(width),
    height: useSizeHtml(height),
    minWidth: useSizeHtml(minWidth),
    maxWidth: useSizeHtml(maxWidth),
    minHeight: useSizeHtml(minHeight),
    maxHeight: useSizeHtml(maxHeight),
  };

  const styleWrapList = {
    height: useSizeHtml(height),
  };

  return (
    <Fragment>
      <header
        id={useIdHtml(id)}
        className={useClassHtml('mk-surface mk-toolbar', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        <div className={useClassHtml('mk-toolbar--content', contentClass)} style={useStyleHtml(styleWrapList)}>
          {children}
        </div>
      </header>
    </Fragment>
  );
};

export default Toolbar;
