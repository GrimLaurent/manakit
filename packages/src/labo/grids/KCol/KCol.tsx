/**
 * KCol
 * @type Structural
 * @module KCol
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ColClassType } from './KCol.type';

// styles
import './KCol.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';

const KCol: FunctionComponent<ColClassType> = ({
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
      <div id={id} className={useClassName(`k-col`, className, classList)} style={useStyle({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

export default KCol;
