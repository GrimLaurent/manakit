/**
 * ListItemIcon
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module ListItemIcon
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { ListItemIconType } from '../types/ListItemIcon.types';
import { ListItemIconStyled } from '../styles/ListItemIcon.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const ListItemIcon: FunctionComponent<ListItemIconType> = ({ id, className, style, children }) => {
  return (
    <ListItemIconStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-list-item--icon', className)}
      style={useStyleHtml({}, style)}
    >
      {children}
    </ListItemIconStyled>
  );
};

export default ListItemIcon;
