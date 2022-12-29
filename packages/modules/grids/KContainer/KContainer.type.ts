import { ElementIdHTMLType, ElementClassHTMLType, ElementStyleHTMLType, ElementChildrenType } from '../../../types';

export class ContainerClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  fluid?: boolean;
  fillHeight?: boolean;
  constructor(id = undefined, className = undefined, style = undefined, children = undefined) {
    this.id = id;
    this.className = className;
    this.style = style;
    this.children = children;
  }
}
