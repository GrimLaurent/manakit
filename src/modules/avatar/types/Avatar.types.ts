import { ElementHTMLDefaultType_Extended, RoundedType, ElementSizeDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  rounded?: RoundedType;
  color?: string;
  size?: string | number;
}

interface StyledPropsType {
  rounded?: RoundedType;
  color?: string;
  size?: string | number;
}

export interface AvatarType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
export interface AvatarStyledType
  extends StyledPropsType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType_Extended {}
