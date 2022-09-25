import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  main?: boolean;
}

export interface ContentType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
