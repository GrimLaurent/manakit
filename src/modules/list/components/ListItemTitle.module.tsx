/**
 * ListItemTitle
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module ListItemTitle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { ListItemTitleType } from '../types/ListItemTitle.types';
import { ListItemTitleStyled } from '../styles/ListItemTitle.styled';
import { useClassHtml, useIdHtml, useStyleHtml, useThemeColor } from '../../../utils';

const ListItemTitle: FunctionComponent<ListItemTitleType> = ({ id, className, style, children }) => {
  return (
    <ListItemTitleStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-list-item--title', className)}
      style={useStyleHtml({}, style)}
    >
      {children}
    </ListItemTitleStyled>
  );
};

export default ListItemTitle;
