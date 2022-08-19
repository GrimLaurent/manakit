import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../../types';

interface ModuleCustomType {
  absolute?: boolean;
  bottom?: boolean;
  dense?: boolean;
  elevation?: number | string;
  flat?: boolean;
  floating?: boolean;
  outlined?: boolean;
  rounded?: boolean | string;
  shaped?: boolean;
  tile?: boolean;
}

export interface ToolbarType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
