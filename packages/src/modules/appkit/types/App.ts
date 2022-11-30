import { ElementHTMLDefaultType_Extended, UserPreset } from '../../../types';

interface ModuleCustomType {
  isDark?: boolean;
  theme?: UserPreset;
}

export interface AppType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
