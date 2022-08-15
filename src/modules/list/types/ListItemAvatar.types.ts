import { AvatarType } from './../../avatar/types/Avatar.types';

import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  left?: boolean;
  right?: boolean;
}

interface StyledPropsType {}

export interface ListItemAvatarType extends AvatarType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface ListItemAvatarStyledType
  extends StyledPropsType,
    AvatarType,
    ModuleCustomType,
    ElementHTMLDefaultType_Extended {}
