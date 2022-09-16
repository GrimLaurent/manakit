import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  disabled?: boolean;
  dense?: boolean;
}

export interface IconType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
