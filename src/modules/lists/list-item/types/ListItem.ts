import { ElementHTMLDefaultType_Extended, ElementActionType_Extend } from '../../../../types';

interface ModuleCustomType {
  twoLine?: boolean;
  threeLine?: boolean;
}

export interface ListItemType extends ModuleCustomType, ElementHTMLDefaultType_Extended, ElementActionType_Extend {}
