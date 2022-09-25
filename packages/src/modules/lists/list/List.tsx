/**
 * List
 *
 * @type Structural
 * @module List
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './List.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { ListType } from './types/List';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../../utils';

const List: FunctionComponent<ListType> = ({
  id,
  className,
  style,
  children,
  dense,
  disabled,
  elevation,
  rounded,
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
    { el: 'mk-list--dense', val: dense },
    { el: 'mk-list--disabled', val: disabled },
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
        className={useClassHtml('mk-list', className, classList)}
        style={useStyleHtml(styleList, style)}
        role="list"
      >
        {children}
      </div>
    </Fragment>
  );
};

export default List;
