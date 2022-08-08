/**
 * Grid
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Module
 * @module Grid
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { GridType } from './types/Grid.types';
import { GridStyled } from './styles/Grid.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../utils';

const Grid: FunctionComponent<GridType> = ({ id, className, style, children }) => {
  return (
    <GridStyled id={useIdHtml(id)} className={useClassHtml('mk-grid', className)} style={useStyleHtml({}, style)}>
      {children}
    </GridStyled>
  );
};

export default Grid;
