/**
 * ListItemAction
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module ListItemAction
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { ListItemActionType } from '../types/ListItemAction.types';
import { ListItemActionStyled } from '../styles/ListItemAction.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const ListItemAction: FunctionComponent<ListItemActionType> = ({ id, className, style, children, color }) => {
  return (
    <ListItemActionStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-list-item--action', className)}
      style={useStyleHtml({}, style)}
      color={color}
    >
      {children}
    </ListItemActionStyled>
  );
};

export default ListItemAction;
