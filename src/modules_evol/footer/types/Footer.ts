import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  absolute?: boolean;
  elevation?: number | string;
  fixed?: boolean;
  inset?: boolean;
  outlined?: boolean;
  padless?: boolean;
  rounded?: boolean | string;
  shaped?: boolean;
  tile?: boolean;
}

export interface FooterType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
