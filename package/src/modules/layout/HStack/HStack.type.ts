import { ElementHTMLDefaultType_Extended, ElementActionOnClikType } from '../../../types';

interface ModuleCustomType {
  hiddenAction?: boolean;
}

export interface HstackType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}

export interface HstackButtonType extends ModuleCustomType, ElementHTMLDefaultType_Extended, ElementActionOnClikType {}
