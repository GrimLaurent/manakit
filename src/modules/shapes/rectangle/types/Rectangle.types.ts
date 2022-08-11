import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../../types';

export interface ModuleCustomType {
  color?: string;
  dark?: boolean;
  light?: boolean;
}

interface RectanglePropsType {
  mode?: 'dark' | 'light';
}

export interface RectangleType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
export interface RectangleStyledType
  extends RectanglePropsType,
    ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
