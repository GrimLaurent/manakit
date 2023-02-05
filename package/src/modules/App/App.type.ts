import {
  UserPreset,
  ElementIdHTMLType,
  ElementClassHTMLType,
  ElementStyleHTMLType,
  ElementChildrenType,
} from '../../types';

export class AppClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  set?: UserPreset;
  colorScheme?: 'dark' | 'light' | 'auto';
  constructor(
    id = undefined,
    className = undefined,
    style = undefined,
    children = undefined,
    colorScheme?: undefined,
    set = undefined,
  ) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
    this.set = set;
    this.colorScheme = colorScheme;
  }
}
