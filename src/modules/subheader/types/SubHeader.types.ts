import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  color?: string;
  inset?: boolean;
}

interface StyledPropsType {}

export interface SubHeaderType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface SubHeaderStyledType extends StyledPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
