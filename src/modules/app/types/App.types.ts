import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  dark?: boolean;
  light?: boolean;
  noSSR?: boolean;
}

interface StyledPropsType {
  mode: 'dark' | 'light';
}

export interface AppType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface AppStyledType extends StyledPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
