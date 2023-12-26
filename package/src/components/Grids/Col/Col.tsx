/**
 * Col
 * @type Structural
 * @module Col
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';

// styles
import './Col.scss';

// utilities
import { useClassName, useStyle } from '../../../utils/dom';
import {
  AlignSelfType,
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
} from '../../../types';

const Col: FunctionComponent<ColClassType> = ({
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
      <div id={id} className={useClassName(`mkt-col`, className, classList)} style={useStyle({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

class ColClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  cols?: string | number;
  alignSlef?: AlignSelfType;
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
  offset?: string | number;
  offsetXs?: string | number;
  offsetSm?: string | number;
  offsetMd?: string | number;
  offsetLg?: string | number;
  offsetXl?: string | number;
  order?: string | number;
  orderXs?: string | number;
  orderSm?: string | number;
  orderMd?: string | number;
  orderLg?: string | number;
  orderXl?: string | number;
}

export default Col;
