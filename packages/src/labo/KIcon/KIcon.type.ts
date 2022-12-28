import { ElementIdHTMLType, ElementClassHTMLType, ElementStyleHTMLType, ElementChildrenType } from '../../types';

export class IconClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  disabled?: boolean;
  dense?: boolean;
  size?: string | number;
  color?: string;
  title?: string;
  dark?: boolean;
  light?: boolean;
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}
