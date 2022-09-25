/**
 * Paper
 *
 * @type Structural
 * @module Paper
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Paper.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { PaperType } from './types/Paper';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const Paper: FunctionComponent<PaperType> = ({
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
}) => {
  const classList = [
    { el: 'elevation-1', val: typeof elevation === 'boolean' && elevation },
    { el: 'elevation', val: typeof elevation === 'string' ? elevation : false },
    { el: 'rounded-lg', val: typeof rounded === 'boolean' && rounded },
    { el: 'rounded', val: typeof rounded === 'string' ? rounded : false },
    { el: 'paper--outlined', val: outlined },
    { el: 'paper--shaped', val: shaped },
    { el: 'paper--tile', val: tile },
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
        className={useClassHtml('mk-paper', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Paper;
