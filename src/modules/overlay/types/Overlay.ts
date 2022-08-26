import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  absolute?: boolean;
  opacity?: number | string;
  zIndex?: number | string;
  value?: boolean;
}

export interface OverlayType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
