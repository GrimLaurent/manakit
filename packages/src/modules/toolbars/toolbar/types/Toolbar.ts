import {
  ElementClassHTMLType,
  ElementHTMLDefaultType_Extended,
  ElementSizeDefaultType_Extended,
  RoundedType,
  ElevationType,
} from '../../../../types';

interface ModuleCustomType {
  absolute?: boolean;
  bottom?: boolean;
  dense?: boolean;
  elevation?: ElevationType;
  flat?: boolean;
  floating?: boolean;
  outlined?: boolean;
  rounded?: boolean | RoundedType;
  shaped?: boolean;
  tile?: boolean;
  contentClass?: ElementClassHTMLType;
}

export interface ToolbarType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
