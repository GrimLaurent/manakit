import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  fluid?: boolean;
}

interface StyledPropsType {}

export interface ContainerType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface ContainerStyledType extends StyledPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
