import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  fluid?: boolean;
}

interface ViewPropsType {}

export interface ViewType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface ViewStyledType extends ViewPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
