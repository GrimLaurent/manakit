/**
 * GridRow
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module GridRow
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { GridRowType } from '../types/GridRow.types';
import { GridRowStyled } from '../styles/GridRow.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const GridRow: FunctionComponent<GridRowType> = ({ id, className, style, children }) => {
  return (
    <GridRowStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-grid--row', className)}
      style={useStyleHtml({}, style)}
    >
      {children}
    </GridRowStyled>
  );
};

export default GridRow;
