/**
 * ListItem
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module ListItem
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { ListItemType } from '../types/ListItem.types';
import { ListItemStyled } from '../styles/ListItem.styled';
import { useClassHtml, useIdHtml, useStyleHtml, useThemeColor } from '../../../utils';

const ListItem: FunctionComponent<ListItemType> = ({
  id,
  className,
  style,
  children,
  dense,
  color,
  twoLine,
  threeLine,
}) => {
  return (
    <ListItemStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-list-item', className)}
      style={useStyleHtml({}, style)}
      dense={dense}
      color={useThemeColor(color)}
      twoLine={twoLine}
      threeLine={threeLine}
      tabindex="-1"
    >
      {children}
    </ListItemStyled>
  );
};

export default ListItem;
