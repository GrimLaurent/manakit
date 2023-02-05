import {
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
  AlignSelfType,
} from '../../../types';

export class GridItemClassType {
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
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}
