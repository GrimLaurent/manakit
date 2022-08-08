/**
 * GridCol
 *
 * @description A container that arranges other elements in a two dimensional layout.
 * @type Component
 * @module GridCol
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent } from 'react';
import { GridColType } from '../types/GridCol.types';
import { GridColStyled } from '../styles/GridCol.styled';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const GridCol: FunctionComponent<GridColType> = ({ id, className, style, children, col, xs, sm, md, lg, xl }) => {
  return (
    <GridColStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-grid--col', className)}
      style={useStyleHtml({}, style)}
      col={col}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
    >
      {children}
    </GridColStyled>
  );
};

export default GridCol;
