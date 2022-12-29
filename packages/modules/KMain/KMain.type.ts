import { ElementIdHTMLType, ElementClassHTMLType, ElementStyleHTMLType, ElementChildrenType } from '../../types';

export class MainClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}
