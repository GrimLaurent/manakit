/**
 * ListItemContent
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module ListItemContent
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { ListItemContentType } from '../types/ListItemContent.types';
import { ListItemContentStyled } from '../styles/ListItemContent.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const ListItemContent: FunctionComponent<ListItemContentType> = ({ id, className, style, children }) => {
  return (
    <ListItemContentStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-list-item--content', className)}
      style={useStyleHtml({}, style)}
    >
      {children}
    </ListItemContentStyled>
  );
};

export default ListItemContent;
