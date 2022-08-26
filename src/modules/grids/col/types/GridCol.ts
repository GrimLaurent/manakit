import { ElementHTMLDefaultType_Extended, AlignSelfType } from '../../../../types';

interface ModuleCustomType {
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

export interface GridColType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
