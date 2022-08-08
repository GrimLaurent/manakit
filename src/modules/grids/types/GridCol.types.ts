import { ElementHTMLDefaultType_Extended, ColsSizeType } from '../../../types';
export interface GridColType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}

interface ModuleCustomType {
  col?: ColsSizeType;
  xs?: ColsSizeType;
  sm?: ColsSizeType;
  md?: ColsSizeType;
  lg?: ColsSizeType;
  xl?: ColsSizeType;
}

interface GridPropsType {}

export interface GridColType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface GridColStyledType extends GridPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
