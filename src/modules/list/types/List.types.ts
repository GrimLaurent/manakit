import { PaperType, PaperStyledType } from './../../paper/types/Paper.types';
import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../types';

export interface ModuleCustomType {
  nav?: boolean;
  dense?: boolean;
  subHeader?: boolean;
  twoLine?: boolean;
  threeLine?: boolean;
}

interface StyledPropsType {
  roundedChild?: number | string;
}

export interface ListType
  extends PaperType,
    ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
export interface ListStyledType
  extends StyledPropsType,
    ModuleCustomType,
    PaperStyledType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
