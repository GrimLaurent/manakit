import {
  ElementHTMLDefaultType_Extended,
  ElementActionType_Extend,
  ElementSizeDefaultType_Extended,
} from '../../../types';

interface ModuleCustomType {
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  label?: boolean;
  link?: boolean;
}

export interface ChipType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementActionType_Extend,
    ElementSizeDefaultType_Extended {}
