import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  noSSR?: boolean;
}

export interface AppType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
