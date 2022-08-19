import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  elevation?: number | string;
  outlined?: boolean;
  rounded?: boolean | string;
  shaped?: boolean;
  tile?: boolean;
}

export interface PaperType extends ModuleCustomType, ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended {}
