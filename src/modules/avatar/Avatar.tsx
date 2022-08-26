/**
 * Avatar
 *
 * @type Structural
 * @module Avatar
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Avatar.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { AvatarType } from './types/Avatar';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const Avatar: FunctionComponent<AvatarType> = ({
  id,
  className,
  style,
  children,
  right,
  left,
  rounded,
  tile,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  size,
}) => {
  const classList = [
    { el: 'rounded-lg', val: typeof rounded === 'boolean' && rounded },
    { el: 'rounded', val: typeof rounded === 'string' ? rounded : false },
    { el: 'avatar--tile', val: tile },
    { el: 'is--left', val: left },
    { el: 'is--right', val: right },
  ];

  const styleList = {
    width: useSizeHtml(size ? size : width),
    height: useSizeHtml(size ? size : height),
    minWidth: useSizeHtml(minWidth),
    maxWidth: useSizeHtml(maxWidth),
    minHeight: useSizeHtml(minHeight),
    maxHeight: useSizeHtml(maxHeight),
  };

  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-avatar', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default Avatar;
