import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  dark?: boolean;
  light?: boolean;
  noSSR?: boolean;
}

interface AppPropsType {
  mode: string;
}

export interface AppType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface AppStyledType extends AppPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
