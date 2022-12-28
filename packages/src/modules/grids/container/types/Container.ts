import { ElementHTMLDefaultType_Extended } from '../../../../types';

interface ModuleCustomType {
  fluid?: boolean;
  fillHeight?: boolean;
}

export interface ContainerType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
