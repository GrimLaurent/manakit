import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  open?: boolean;
  fullscreen?: boolean;
}

export interface DialogType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
