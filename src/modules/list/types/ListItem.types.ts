import { ElementHTMLDefaultType_Extended } from '../../../types';

export interface ModuleCustomType {
  dense?: boolean;
  color?: string;
  threeLine?: boolean;
  twoLine?: boolean;
}

interface StyledPropsType {
  tabindex?: string | number;
}

export interface ListItemType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface ListItemStyledType extends StyledPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
