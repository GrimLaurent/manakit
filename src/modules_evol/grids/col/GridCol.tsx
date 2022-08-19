/**
 * GridCol
 *
 * @type Structural
 * @module GridCol
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './GridCol.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { GridColType } from './types/GridCol';
import { useClassHtml, useIdHtml, useStyleHtml } from '../../../utils';

const GridCol: FunctionComponent<GridColType> = ({
  id,
  className,
  style,
  children,
  cols,
  alignSlef,
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
}) => {
  const classList = [
    { el: 'align', val: alignSlef },
    { el: 'col', val: cols },
    { el: 'col-xs', val: xs },
    { el: 'col-sm', val: sm },
    { el: 'col-md', val: md },
    { el: 'col-lg', val: lg },
    { el: 'col-xl', val: xl },
    { el: 'offset', val: offset },
    { el: 'offset-xs', val: offsetXs },
    { el: 'offset-sm', val: offsetSm },
    { el: 'offset-md', val: offsetMd },
    { el: 'offset-lg', val: offsetLg },
    { el: 'offset-xl', val: offsetXl },
    { el: 'order', val: order },
    { el: 'order-xs', val: orderXs },
    { el: 'order-sm', val: orderSm },
    { el: 'order-md', val: orderMd },
    { el: 'order-lg', val: orderLg },
    { el: 'order-xl', val: orderXl },
  ];

  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml(`mk-grid--col`, className, classList)}
        style={useStyleHtml({}, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default GridCol;
