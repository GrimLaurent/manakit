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

const GridCol: FunctionComponent<GridColType> = ({
  id,
  className,
  style,
  children,
  cols,
  xs,
  sm,
  md,
  lg,
  xl,
  offset,
  offsetXs,
  offsetSm,
  offsetMd,
  offsetLg,
  offsetXl,
  order,
  orderXs,
  orderSm,
  orderMd,
  orderLg,
  orderXl,
  alignSelf,
}) => {
  return (
    <GridColStyled
      id={useIdHtml(id)}
      className={useClassHtml('mk-grid--col', className)}
      style={useStyleHtml({}, style)}
      cols={cols}
      xs={xs}
      sm={sm}
      md={md}
      lg={lg}
      xl={xl}
      offset={offset}
      offsetXs={offsetXs}
      offsetSm={offsetSm}
      offsetMd={offsetMd}
      offsetLg={offsetLg}
      offsetXl={offsetXl}
      order={order ? (order === 'first' ? -1 : order === 'last' ? 13 : order) : undefined}
      orderXs={orderXs ? (orderXs === 'first' ? -1 : orderXs === 'last' ? 13 : orderXs) : undefined}
      orderSm={orderSm ? (orderSm === 'first' ? -1 : orderSm === 'last' ? 13 : orderSm) : undefined}
      orderMd={orderMd ? (orderMd === 'first' ? -1 : orderMd === 'last' ? 13 : orderMd) : undefined}
      orderLg={orderLg ? (orderLg === 'first' ? -1 : orderLg === 'last' ? 13 : orderLg) : undefined}
      orderXl={orderXl ? (orderXl === 'first' ? -1 : orderXl === 'last' ? 13 : orderXl) : undefined}
      alignSelf={alignSelf}
    >
      {children}
    </GridColStyled>
  );
};

export default GridCol;
