import { ElementHTMLDefaultType_Extended, ElementSizeDefaultType } from '../../../types';

interface ModuleCustomType {
  absolute?: boolean;
  fixed?: boolean;
  bottom?: boolean;
  right?: boolean;
  value?: boolean;
  temporary?: boolean;
  app?: boolean;
}

export interface NavigationDrawerType
  extends ModuleCustomType,
    ElementHTMLDefaultType_Extended,
    ElementSizeDefaultType {}
