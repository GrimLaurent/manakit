import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  right?: boolean;
  left?: boolean;
  rounded?: boolean | string;
  size?: number | string;
  tile?: boolean;
}

export interface AvatarType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
