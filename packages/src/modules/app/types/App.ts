import { ElementHTMLDefaultType_Extended, UserPreset } from '../../../types';

interface ModuleCustomType {
  noSSR?: boolean;
  isDark?: boolean;
  theme?: UserPreset;
}

export interface AppType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
