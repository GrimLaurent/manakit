import { ElementHTMLDefaultType_Extended } from '../../../types';

export interface ModuleCustomType {
  noGutter?: boolean;
}

interface GridPropsType {}

export interface GridType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface GridStyledType extends GridPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
