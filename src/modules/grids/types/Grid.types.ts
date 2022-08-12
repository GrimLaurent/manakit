import { ElementHTMLDefaultType_Extended } from '../../../types';

export interface ModuleCustomType {
  noGutter?: boolean;
}

interface StyledPropsType {}

export interface GridType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface GridStyledType extends StyledPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
