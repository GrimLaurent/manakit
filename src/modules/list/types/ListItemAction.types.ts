import { ElementHTMLDefaultType_Extended } from '../../../types';

export interface ModuleCustomType {
  color?: string;
}

interface StyledPropsType {}

export interface ListItemActionType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface ListItemActionStyledType extends StyledPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
