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
  isDark?: boolean;
  set?: UserPreset;
  constructor(
    id = undefined,
    className = undefined,
    style = undefined,
    children = undefined,
    isDark = false,
    set = undefined,
  ) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
    this.isDark = isDark;
    this.set = set;
  }
}
