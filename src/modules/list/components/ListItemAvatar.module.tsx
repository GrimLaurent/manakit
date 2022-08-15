/**
 * ListItemAvatar
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module ListItemAvatar
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { ListItemAvatarType } from '../types/ListItemAvatar.types';
import { ListItemAvatarStyled } from '../styles/ListItemAvatar.styled';
import { useClassHtml } from '../../../utils';

import Avatar from '../../avatar/Avatar.module';

const ListItemAvatarStyledHOC = ListItemAvatarStyled(Avatar);

const ListItemAvatar: FunctionComponent<ListItemAvatarType> = ({
  id,
  className,
  style,
  children,
  color,
  rounded,
  width,
  minWidth,
  maxWidth,
  height,
  minHeight,
  maxHeight,
  size,
  left,
  right,
}) => {
  return (
    <ListItemAvatarStyledHOC
      id={id}
      className={useClassHtml('mk-list-item--avatar', className)}
      style={style}
      color={color}
      rounded={rounded}
      width={width}
      minWidth={minWidth}
      maxWidth={maxWidth}
      height={height}
      minHeight={minHeight}
      maxHeight={maxHeight}
      size={size ? size : '40px'}
      left={left}
      right={right}
    >
      {children}
    </ListItemAvatarStyledHOC>
  );
};

export default ListItemAvatar;
