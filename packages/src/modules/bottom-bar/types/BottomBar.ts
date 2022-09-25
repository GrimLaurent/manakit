import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  absolute?: boolean;
  fixed?: boolean;
  grow?: boolean;
}

export interface BottomBarType
  extends ModuleCustomType,
    ElementSizeDefaultType_Extended,
    ElementHTMLDefaultType_Extended {}
