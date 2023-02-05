import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  height?: number | string;
}

export interface VstackType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
