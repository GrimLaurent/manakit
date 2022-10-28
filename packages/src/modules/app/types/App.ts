import { ElementHTMLDefaultType_Extended } from '../../../types';

interface ModuleCustomType {
  noSSR?: boolean;
  isDark?: boolean;
  theme?: any;
  themeDefault?: 'light' | 'dark';
}

export interface AppType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
