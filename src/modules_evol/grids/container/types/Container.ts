import { ElementHTMLDefaultType_Extended } from '../../../../types';

interface ModuleCustomType {
  fluid?: boolean;
}

export interface ContainerType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
