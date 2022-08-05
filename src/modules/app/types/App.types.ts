import { ElementHTMLDefaultType_Extended } from '../../../types';

export interface ModuleCustomType {
  dark?: boolean;
  light?: boolean;
  noSSR?: boolean;
}

export interface PropsApplicationType {
  mode: string;
}

export interface AppType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface ApplicationStyledType
  extends PropsApplicationType,
    ModuleCustomType,
    ElementHTMLDefaultType_Extended {}
