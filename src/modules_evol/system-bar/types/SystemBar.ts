import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  absolute?: boolean;
  fixed?: boolean;
  height?: number | string;
}

export interface SystemBarType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
