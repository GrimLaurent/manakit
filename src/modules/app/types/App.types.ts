import { ElementHTMLDefaultType_Extended, CustomThemeType } from '../../../types';

interface ModuleCustomType {
  noSSR?: boolean;
  theme?: CustomThemeType;
  dark?: boolean;
}

interface StyledPropsType {}

export interface AppType extends ModuleCustomType, ElementHTMLDefaultType_Extended {}
export interface AppStyledType extends StyledPropsType, ModuleCustomType, ElementHTMLDefaultType_Extended {}
