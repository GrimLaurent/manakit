import {
  ElementHTMLDefaultType_Extended,
  ElementActionType_Extend,
  ElementSizeDefaultType_Extended,
} from '../../../../types';

interface ModuleCustomType {
  disabled?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  tile?: boolean;
  elevation?: boolean | string;
  shaped?: boolean;
}

export interface CardType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementActionType_Extend,
    ElementSizeDefaultType_Extended {}
