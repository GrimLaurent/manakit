/**
 * ListItemSubTitle
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module ListItemSubTitle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { ListItemSubTitleType } from '../types/ListItemSubTitle.types';
import { ListItemSubTitleStyled } from '../styles/ListItemSubTitle.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const ListItemSubTitle: FunctionComponent<ListItemSubTitleType> = ({ id, className, style, children }) => {
  return (
    <ListItemSubTitleStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-list-item--subtitle', className)}
      style={useStyleHtml({}, style)}
    >
      {children}
    </ListItemSubTitleStyled>
  );
};

export default ListItemSubTitle;
