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
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const ListItemAvatar: FunctionComponent<ListItemAvatarType> = ({ id, className, style, children }) => {
  return (
    <ListItemAvatarStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-list-item--avatar', className)}
      style={useStyleHtml({}, style)}
    >
      {children}
    </ListItemAvatarStyled>
  );
};

export default ListItemAvatar;
