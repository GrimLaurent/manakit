import { ElementHTMLDefaultType } from '../../../types';

interface ModuleCustomType {
  inset?: boolean;
  vertical?: boolean;
}

export interface DividerType extends ModuleCustomType, ElementHTMLDefaultType {}
