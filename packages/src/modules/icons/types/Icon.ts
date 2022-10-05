import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  disabled?: boolean;
  dense?: boolean;
  size?: string | number;
  color?: string;
  title?: string;
}

export interface IconType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
