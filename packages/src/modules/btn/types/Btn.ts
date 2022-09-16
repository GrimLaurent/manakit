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
  block?: boolean;
  icon?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  fab?: boolean;
  text?: boolean;
  tile?: boolean;
  elevation?: boolean | string;
  absolute?: boolean;
  fixed?: boolean;
  right?: boolean;
  left?: boolean;
  top?: boolean;
  bottom?: boolean;
}

export interface BtnType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementActionType_Extend,
    ElementSizeDefaultType_Extended {}
