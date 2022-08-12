import { ElementHTMLDefaultType_Extended, ColsSizeType, ColsOrderType, ColsAlignSelftType } from '../../../types';
export interface GridColType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}

interface ModuleCustomType {
  alignSelf?: ColsAlignSelftType;
  cols?: ColsSizeType;
  xs?: ColsSizeType;
  sm?: ColsSizeType;
  md?: ColsSizeType;
  lg?: ColsSizeType;
  xl?: ColsSizeType;
  offset?: ColsSizeType;
  offsetXs?: ColsSizeType;
  offsetSm?: ColsSizeType;
  offsetMd?: ColsSizeType;
  offsetLg?: ColsSizeType;
  offsetXl?: ColsSizeType;
}

interface OrderType {
  order?: ColsOrderType;
  orderXs?: ColsOrderType;
  orderSm?: ColsOrderType;
  orderMd?: ColsOrderType;
  orderLg?: ColsOrderType;
  orderXl?: ColsOrderType;
}

interface StyledPropsType {
  order?: ColsOrderType | '-1' | -1 | '13' | 13;
  orderXs?: ColsOrderType | '-1' | -1 | '13' | 13;
  orderSm?: ColsOrderType | '-1' | -1 | '13' | 13;
  orderMd?: ColsOrderType | '-1' | -1 | '13' | 13;
  orderLg?: ColsOrderType | '-1' | -1 | '13' | 13;
  orderXl?: ColsOrderType | '-1' | -1 | '13' | 13;
}

export interface GridColType extends ModuleCustomType, OrderType, ElementHTMLDefaultType_Extended {}
export interface GridColStyledType extends StyledPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
