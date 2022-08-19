import { ElementHTMLDefaultType_Extended, ElementActionType_Extend } from '../../../types';

export interface ModuleCustomType {
  dense?: boolean;
  color?: string;
  threeLine?: boolean;
  twoLine?: boolean;
  isActive?: boolean;
  exact?: boolean;
}

interface StyledPropsType {
  tabindex?: string | number;
}

export interface ListItemType extends ModuleCustomType, ElementHTMLDefaultType_Extended, ElementActionType_Extend {}
export interface ListItemStyledType
  extends StyledPropsType,
    ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementHTMLDefaultType_Extended {}
