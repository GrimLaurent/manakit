import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../../types';

interface ModuleCustomType {
  elevation?: number | string;
  rounded?: boolean | string;
  disabled?: boolean;
  dense?: boolean;
}

export interface ListType extends ModuleCustomType, ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended {}
