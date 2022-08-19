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
import React, { FunctionComponent, useEffect, useState } from 'react';
import { ListItemType } from '../types/ListItem.types';
import { ListItemStyled } from '../styles/ListItem.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const ListItem: FunctionComponent<ListItemType> = ({
  id,
  className,
  style,
  children,
  dense,
  color,
  twoLine,
  threeLine,
  onClick,
  isActive,
}) => {
  return (
    <ListItemStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-list-item', className)}
      style={useStyleHtml({}, style)}
      dense={dense}
      color={color}
      twoLine={twoLine}
      threeLine={threeLine}
      tabindex="-1"
      onClick={onClick as any}
      isActive={isActive}
    >
      {children}
    </ListItemStyled>
  );
};

export default ListItem;
